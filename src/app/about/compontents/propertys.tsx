import { prisma } from "@/lib/prisma";
import React from "react";

const getPropertys = async () => {
  const propertys = await prisma.property.findMany({});

  return propertys;
};

const Propertys = async () => {
  // const data = await getPropertys();
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json());

  console.log(data);

  return (
    <div>
      {data.map((i: any) => (
        <p key={i.id}>{i.title}</p>
      ))}
    </div>
  );
};

export default Propertys;
