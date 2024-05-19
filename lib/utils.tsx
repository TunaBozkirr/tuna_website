import { LinkedinIcon } from "@/components/icons/smashing";
import { IconBalloonFilled, IconCarCrash } from "@tabler/icons-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SkinOutlined } from '@ant-design/icons';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
export const formattedDateTimeline = (
  date: string,
  formatOpts?: Intl.DateTimeFormatOptions | undefined
) =>
  new Date(date).toLocaleDateString(
    "en-US",
    formatOpts
      ? formatOpts
      : {
          year: "numeric",
        }
  );

export const navItems = [
  { href: "/", label: "Readme" },
  { href: "/changelog", label: "Changelog" },
  // { href: "/notes", label: "Notes" }, // disabled for now
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" }]

export const careerItems = [
  {
    from: 2024,
    to: null,
    title: "BI and Operation Specialist",
    company: { name: "Inspire IT"},
    location: "Warsaw, Poland",
    description: null,
  },
  {
    from: 2021,
    to: 2023,
    title: "Business Intelligence Engineer",
    company: { name: "Burgan Bank"},
    location: "Istanbul, Turkey",
    description:
      "",
  },
  {
    from: 2021,
    to: 2021,
    title: "DevOps and Software Test Intern",
    company: { name: "Burgan Bank", url: null },
    location: "Istanbul, Turkey",
    description:
      "",
  },
];

const dateFormat = {
  day: {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
  },
  month: {
    year: "numeric" as const,
    month: "long" as const,
  },
  year: {
    year: "numeric" as const,
  },
};

const changelogItems: Array<{
  date: string;
  event: string;
  title: string;
  desciption?: string;
  icon?: string;
  dateFormatOptions?: (typeof dateFormat)[keyof typeof dateFormat];
  photos?: Array<{ src: string; variant: "1x1" | "4x3" | "4x5" }>;
}> = [
  {
    date: "2024",
    event: "Travel",
    title: "Visit to Berlin",
    icon: "✈︎",
    photos: [
      {
        src: "/changelog/berlin.jpeg",
        variant: "1x1",
      },
      {
        src: "/changelog/berlin2.jpeg",
        variant: "1x1",
      },
    ],
  },
  {
    date: "2023",
    event: "New life",
    title: "I sold my car, left my job, and relocated to Warsaw to pursue my master's degree.",
    desciption: "",
    icon: "🚀",
    photos: [
      {
        src: "/changelog/relocate.jpeg",
        variant: "1x1",
      },
      {
        src: "/changelog/warsaw.jpeg",
        variant: "1x1",
      },
    ],
  },
  {
    date: "2023",
    event: "Travel",
    title: "Visit to Georgia",
    desciption: "",
    icon: "✈︎ ",
    photos: [
      {
        src: "/changelog/georgia.jpeg",
        variant: "1x1",
      },
      {
        src: "/changelog/georgia2.jpeg",
        variant: "1x1",
      },
      {
        src: "/changelog/georgia3.jpeg",
        variant: "1x1",
      },
    ],
  },
  {
    date: "2022",
    event: "Travel",
    title: "I went on a tour of the Aegean with my friend. We visited 5 cities in 10 days",
    desciption: "",
    icon: "✈︎ ",
    photos: [
      {
        src: "/changelog/fethiye.jpeg",
        variant: "1x1",
      },
    ],
  
  },

  {
    date: "2022",
    event: "Self Discovery",
    title: "I discovered my passion for flow arts, provide a unique form of self-expression.",
    desciption: "",
    icon: "🔥", 
    photos: [
      {
        src: "/changelog/fire.jpeg",
        variant: "1x1",
      },
      {
        src: "/changelog/fire2.jpeg",
        variant: "1x1",
      },
    ],
  },
  {
    date: "2022",
    event: "First Car",
    title: "Renault Clio 2017",
    desciption: "",
    icon: "🚗",
    photos: [
      {
        src: "/changelog/2machine.jpeg",
        variant: "1x1",
      },
    ],
  },
  {
    date: "2021",
    event: "First Job",
    title: "I started my first job as a BI developer at Burganbank",
    desciption:
      "",
    icon: "💼",
    photos: [
      {
        src: "/changelog/burgan.jpeg",
        variant: "4x3",
      },
    ],
    
  },
  {
    date: "2021",
    event: "Intern",
    title: "I started my long term intern at Burganbank.",
    desciption: "",
    icon: "💼",
  },
  {
    date: "2020",
    event: "Third Motorcycle",
    title: "Pulsar Rs 200",
    desciption:
      ".",
    icon: "🏍️",
  },
  {
    date: "2020",
    event: "Travel",
    title: "I travelled in 7 state and 12 city in USA",
    desciption:
      "",
    icon: "🚀",
    photos: [
      {
        src: "/changelog/usa.jpeg",
        variant: "4x3",
      },
      {
        src: "/changelog/usa1.jpeg",
        variant: "4x3",
      },
      {
        src: "/changelog/usa2.jpeg",
        variant: "4x3",
      },
      {
        src: "/changelog/usa3.jpeg",
        variant: "4x3",
      },
    ],
  },
  {
    date: "2020",
    event: "Work and Travel USA",
    title: "I worked as a lifeguard for a summer season at Ohio",
    desciption: "",
    icon: "🚌",
  },
  {
    date: "2019",
    event: "Second Motorcycle",
    title: " Ninja Kawasaki 250r",
    desciption: "It was an incredible machine.",
    icon: "🏍️",
  },
  {
    date: "2018",
    event: "First Motorcycle",
    title: "Pulsar Ns 150",
    icon: "🏍️",
  },
  {
    date: "2017",
    event: "Blog",
    title: "My first blog site that I opened to share my thoughts.",
    desciption:"",
    icon: "✏️",
  },
  {
    date: "2016",
    event: "Education",
    title: "I left the military and started studying computer science at Uludag University.",
    desciption:"It was a very difficult transition for me.",
    icon: "🎓",
  },
  {
    date: "2012",
    event: "Sport",
    title: "I realized the impact of sports on my life.",
    desciption: "",
    icon: "🚀",
    photos: [
      {
        src: "/changelog/body.jpeg",
        variant: "1x1",
      },
    ],
  },
  {
    date: "2011",
    event: "Education",
    title: "I started Naval High School",
    desciption: "A difficult training process was waiting for me.",
    icon: "🎓",
    photos: [
      {
        src: "/changelog/navy2.jpeg",
        variant: "1x1",
      },
      {
        src: "/changelog/navy.jpeg",
        variant: "1x1",
      },
      {
        src: "/changelog/navy3.jpeg",
        variant: "1x1",
      },
      {
        src: "/changelog/navy4.jpeg",
        variant: "1x1",
      },
      {
        src: "/changelog/navy5.jpeg",
        variant: "1x1",
      },
    ],
  },
  {
    date: "2009",
    event: "Education",
    title: "I ranked 400th in the mathematics olympics nationwide in Turkey",
    desciption:
      "",
    icon: "🎓",
  },
  {
    date: "1997-05-02",
    event: "Born",
    title: "I was born in Istanbul.",
    desciption: "",
    icon: "👶🏻",
    dateFormatOptions: dateFormat.day,
    photos: [
      {
        src: "/changelog/bebek.jpeg",
        variant: "1x1",
      },
    ],
    
  },
] as const;

export const changelog = changelogItems.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const projects = [
  
  {
    name: "Integrated Foreign Trade Reporting Solution",
    released: "2023-01-01",
    deprecated: "2023-01-01",
    description:
      "",
    link: { href: "" },
    logo: <></>,
  },
  {
    name: "Stroke Detection from Brain CT Images with Deep Learning",
    description: "",
    link: {
      href: "https://github.com/TunaBozkirr/BrainStrokeDetectionDL",
    },
    //logo: <IconBalloonFilled className="size-10" />,
  },

  {
    name: "Skin Cancer Diagnosis System with Machine Learning",
    description:
      "",
    link: {
      href: "https://github.com/TunaBozkirr/SkinCancerDetectionML",
    },
    //logo: <SkinOutlined className="logo-size" />,
  },
];
