"use client";

import React from "react";
import Image from "next/image";
import { blogPosts } from "@/utils/data";
import { BlogPost } from "@/utils/types";
import styles from "./BlogPage.module.css";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

const BlogContent = () => {
  return (
    <section className={styles.blogPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Psychologist Mona Blog</h1>
        <p className={styles.pageSubtitle}>
          Explore insights on mental health, mindfulness, therapy, and wellness.
        </p>

        <div className={styles.postsGrid}>
          {blogPosts.map((post: BlogPost) => (
            <div key={post.id} className={styles.postCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className={styles.postImage}
                />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.category}>{post.category}</span>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postSummary}>{post.summary}</p>
                <div className={styles.postMeta}>
                  <span>
                    <FaRegCalendarAlt /> {post.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
