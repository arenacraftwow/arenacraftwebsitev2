import { BlogPost } from "components/blog/BlogPost";
import { ArenaCraftJumbotron } from "components/Jumbotron";
import { Heading, SubHeading } from "components/ui/Typography";
import React from "react";


export default function Home() {
  return (
    <div>
      <div >
        <ArenaCraftJumbotron />
        <div style={{ float: 'none' }}>
          <BlogPost
            author="anonymous"
            date={new Date()}
            title='Some blog post title'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptate? Consectetur rerum tenetur quidem hic sequi sint incidunt beatae eos aut ratione praesentium, eius corrupti. Iure molestiae aut soluta amet!
            Nesciunt blanditiis saepe officiis cumque laboriosam tempore voluptate expedita cum nobis provident tempora maxime voluptas quam modi nemo repudiandae natus ipsam, dolorum rerum consequuntur ullam numquam temporibus iusto ratione. Natus.
            Rem quaerat architecto tenetur atque numquam neque ipsa accusamus culpa. Sint quasi neque natus, adipisci sequi, officiis consequatur voluptates provident distinctio quod corrupti eveniet ratione inventore, iure repellat magni debitis.
          </BlogPost>
          <BlogPost
            author="anonymous"
            date={new Date()}
            title='Here we go!'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptate? Consectetur rerum tenetur quidem hic sequi sint incidunt beatae eos aut ratione praesentium, eius corrupti. Iure molestiae aut soluta amet!
            Nesciunt blanditiis saepe officiis cumque laboriosam tempore voluptate expedita cum nobis provident tempora maxime voluptas quam modi nemo repudiandae natus ipsam, dolorum rerum consequuntur ullam numquam temporibus iusto ratione. Natus.
            Rem quaerat architecto tenetur atque numquam neque ipsa accusamus culpa. Sint quasi neque natus, adipisci sequi, officiis consequatur voluptates provident distinctio quod corrupti eveniet ratione inventore, iure repellat magni debitis.
          </BlogPost>
          <BlogPost
            author="anonymous"
            date={new Date()}
            title='Here we go!'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptate? Consectetur rerum tenetur quidem hic sequi sint incidunt beatae eos aut ratione praesentium, eius corrupti. Iure molestiae aut soluta amet!
            Nesciunt blanditiis saepe officiis cumque laboriosam tempore voluptate expedita cum nobis provident tempora maxime voluptas quam modi nemo repudiandae natus ipsam, dolorum rerum consequuntur ullam numquam temporibus iusto ratione. Natus.
            Rem quaerat architecto tenetur atque numquam neque ipsa accusamus culpa. Sint quasi neque natus, adipisci sequi, officiis consequatur voluptates provident distinctio quod corrupti eveniet ratione inventore, iure repellat magni debitis.
          </BlogPost>
        </div>
      </div>
    </div>
  );
}
