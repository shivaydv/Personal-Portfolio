"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

interface Post {
  title: string;
  coverImage: string;
  brief: string;
  slug: string;
  dateAdded: string;
}

interface Publication {
  posts: Post[];
}

interface User {
  publication: Publication;
}

interface GraphQLData {
  data: {
    user: User;
  };
}

const Blog: React.FC = () => {
  const { toast } = useToast();

  const [data, setData] = useState<GraphQLData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGraphQLData = async () => {
      try {
        const graphqlQuery = `
          query {
            user(username: "shivaydv") {
              publication {
                posts {
                  title
                  coverImage
                  slug
                  dateAdded
                }
              }
            }
          }
        `;
        
        const response = await axios.post(
          "https://api.hashnode.com/",
          { query: graphqlQuery },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    };

    fetchGraphQLData();
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-white text-lg py-4 font-semibold">Blogs</h1>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-4">
      {loading && <h1>Loading...</h1>}
        {data
          && data.data.user.publication.posts.map((post) => (
              <div
                key={post.slug}
                className="flex flex-col w-full p-3  gap-4 justify-center items-center  bg-secondaryBackground  rounded-lg"
              >
                <section className="relative aspect-video w-full ">
                  <Image
                    fill
                    className="object-cover max-md:rounded-l-lg"
                    src={post.coverImage}
                    alt={post.title}
                  />
                </section>
                <section className="flex justify-between flex-col gap-4">               
                    <h2 className="text-white font-bold text-lg">
                      {post.title}
                    </h2>
                  <div className="w-full flex justify-between ">
                  <p className="text-sm">
                      {new Date(post.dateAdded).toLocaleDateString()}
                    </p>
                    <Link
                      href={`https://shivaydv.hashnode.dev/${post.slug}`}
                      className="text-base text-green-600"
                    >
                      Read Now
                    </Link>
                    
                  </div>
                </section>
              </div>
            ))
         } 
      </main>

      <div className="flex justify-center items-center w-full my-8 ">
        <Link
          href="https://shivaydv.hashnode.dev/"
          className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 ease-in-out duration-100 "
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Blog;
