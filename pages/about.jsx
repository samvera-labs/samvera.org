import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";

export default function About() {
  return (
    <Layout>
      <Main>
        <h1 className="font-fontin text-3xl uppercase text-darkRed">
          Samvera is Community Sourced Software for Repository Solutions
        </h1>
        <p>
          Samvera is a vibrant and welcoming community of information and
          technology professionals who share challenges, build expertise, and
          create sustainable, best-in-class solutions, making the world’s
          digital collections accessible now and into the future.
        </p>
        <p>
          Samvera was conceived because we believe that no single system can
          provide the full range of repository-based solutions for a given
          institution’s needs, and that no single institution can resource the
          development of a full range of solutions on its own. Samvera means
          ‘togetherness’ in Icelandic, and espouses the value of working
          together to create solutions that address shared challenges. The
          Samvera (originally called Hydra) Community benefits from the breadth
          and depth of knowledge that its adopters bring and, in particular,
          from the contributions of its formal Partners who commit to its long
          term development and viability.
        </p>
      </Main>
    </Layout>
  );
}