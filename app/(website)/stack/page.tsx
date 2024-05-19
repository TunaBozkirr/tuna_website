import { Container } from "@/components/blocks/container";
import { StackList } from "@/components/blocks/stack-list";

export default function Notes() {
  const datas = [


    {
      category: "SQL",
      brand: "MSSQL MySQL Oracle PostgreSQL" ,
      imageSrc: "/stack/sql.png",
    },
    {
      category: "MongoDB",
      imageSrc: "/stack/mongo.png",
    },
    {
      category: "Apache Druid",
      imageSrc: "/stack/druid.png",
    },
    {
      category: "Elasticsearch",
      imageSrc: "/stack/elastic.png",
    },
    {
      category: "Clickhouse",
      imageSrc: "/stack/ch.png",
    },
  ];

  const frontend = [
    {
      category: "Oracle BIEE",
      imageSrc: "/stack/obi.png",
    },
    {
      category: "Power BI",
      imageSrc: "/stack/powerbi.jpg",
    },
  ];

  const backend = [
    {
      brand: "Numpy Pandas Mathplotlib Seaborn Scikit-learn",
      category: "Python",
      imageSrc: "/stack/python.png",
    },
    {
      category: "ODI (ELT Tool)",
      imageSrc: "/stack/odi.png",
    },
    {
      category: "Informatica(ETL)",
      imageSrc: "/stack/informatica.jpg",
    },
  ];
  const cloud= [
    {
      category: "Snowflake",
      imageSrc: "/stack/snowflake.jpg",
    },
    {
      category: "Azure Data Factory",
      imageSrc: "/stack/adf.png",
    },
  ];

  return (
    <Container className="mt-16">
      <div className="max-w-2xl">
        <h1 className="tracking-tight text-5xl">Stack</h1>
        <div className="pro text-muted-foreground text-balance">
          <p className="mt-2">
            The technologies I work with..
          </p>
        </div>
        <StackList
          title="Data Stores"
          description="Technologies related to data storage"
          items={datas}
        />
        <StackList
          title="Front End"
          description="Technologies related to front-end development"
          items={frontend}
        />
        <StackList
          title="Back End"
          description="Technologies related to back-end development"
          items={backend}
        />
        <StackList
          title="Cloud"
          description="Technologies related to cloud computing"
          items={cloud}
        />
      </div>
    </Container>
  );
}
