"use client";

import { useState } from "react";
import { Button, Form, Input } from "antd";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const Hero = () => {
  const [user, setUser] = useState("");
  const router = useRouter();
  const auth = useAuth();
  const [form] = Form.useForm();

  const handleSignup = (values) => {
    auth.SignUp(user);
    router.push("/start", { replace: true });
  };

  return (
    <div className="w-full h-full">
      <div className="">
        <Image
         width={1800}
         height={10}
       
          src="/images/Logo/netflixLogo.jpg"
          alt="bg"
          className="object-cover w-full h-[520px] lg:h-[710px]"
        />
        <div className="absolute top-0 left-0 w-full h-full py-3 bg-black bg-opacity-60 sm:py-0">
          <div className="px-2 lg:px-32 flexBox sm:px-10">
            <Image
              width={180}
              height={120}
              src="/images/Logo/Netflix.png"
              alt="Logo"
              className="object-contain h-16 sm:h-24"
            />
            <Link href="/login">
              <button className="px-4 py-1 bg-red-700 rounded cursor-pointer sm:text-lg">
                Sign In
              </button>
            </Link>
          </div>
          <div className="px-8 pt-16 text-center sm:pb-10 sm:pt-32 flexCol">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Unlimited movies, TV shows, and more
            </h1>
            <h3 className="py-5 text-lg sm:py-8 sm:text-2xl">
              Watch anywhere. Cancel anytime.
            </h3>
            <div className="justify-center text-center flexCol">
              <h1 className="text-lg sm:text-xl">
                Ready to watch? Enter your email to create or restart your
                membership
              </h1>
              <Form
                onFinish={handleSignup}
                form={form}
                className="py-5 flexCol sm:flex-row gap-x-2"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter email",
                    },
                    { type: "email" },
                  ]}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="text-lg text-white border cursor-pointer bg-dry bg-opacity-70 w-80 h-14 sm:w-96 border-stone-600 placeholder:text-white focus:border-white hover:border-white"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    className="h-12 gap-1 text-lg text-white bg-red-600 border-none flexBox sm:h-14 hover:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <h4>Get Started</h4>
                      <FaChevronRight />
                    </div>
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
