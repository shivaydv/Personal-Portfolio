"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import BlogLoding from "@/components/BlogLoading";
import { useToast } from "@/components/ui/use-toast";

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

  const {toast} = useToast(); 

  const [data, setData] = useState<GraphQLData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
                  brief
                  dateAdded
                }
              }
            }
          }
        `;
        setLoading(true)
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
          variant:"destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }
    };

    fetchGraphQLData();
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-white p-6 font-semibold">Blogs</h1>
      <main className="flex flex-col gap-6">
        { data ? (
          data.data.user.publication.posts.map((post) => (
            <Link
              href={`https://shivaydv.hashnode.dev/${post.slug}`}
              key={post.slug}
              className="flex max-lg:flex-col w-full hover:scale-y-105 duration-200 ease-in-out  gap-6 justify-center items-center py-8 bg-secondaryBackground px-6 rounded-lg"
            >
              <section className="md:w-2/3">
                <img
                  className="w-full object-contain h-full"
                  src={post.coverImage}
                  alt={post.title}
                />
              </section>
              <section className="space-y-4">
                <h2 className="text-white font-bold text-xl">{post.title}</h2>
                <p>{post.brief}</p>
              </section>
            </Link>
          ))
        ) : (
          loading && <BlogLoding />
        )}
      </main>

      <div className="flex justify-center items-center w-full py-4 ">
        <Link
          href="https://shivaydv.hashnode.dev/"
          className="p-2 bg-green-600 text-white rounded-lg"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Blog;
