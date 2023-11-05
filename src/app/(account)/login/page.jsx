"use client";

import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const router = useRouter();
  const [form] = Form.useForm();

  const handleLogin = (values) => {
    auth.login(user);
    router("/movie", { replace: true });
  };
  return (
    <div className="w-full h-full">
      <div className="relative">
        <Image
          fill
          src="/images/Logo/netflixLogo.jpg"
          alt="bg"
          className="object-cover w-full h-[800px] md:h-screen"
        />
        <div className="absolute top-0 left-0 w-full bg-main md:h-screen bg-opacity-50 h-[800px] py-2">
          <div>
            <Link href="/">
              <Image
                width={60}
                height={60}
                src="/images/Logo/Netflix.png"
                alt="Logo"
                className="object-contain h-20"
              />
            </Link>
          </div>
          <div className="flex justify-center w-full h-full px-3 py-8 sm:py-20">
            <div className="w-full sm:w-[450px] lg:w-[400px] h-[540px] sm:h-[600px] lg:h-[560px] bg-main py-6 px-8 sm:px-14 bg-opacity-70 text-white">
              <Form
                form={form}
                name="normal_form"
                onFinish={handleLogin}
                initialValues={{ remember: true }}
                layout="vertical"
                className="leading-3 text-white"
              >
                <header className="pb-6 text-2xl font-bold ">Sign In</header>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Email or phone Number",
                    },
                    { type: "email" },
                  ]}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="h-12 text-white cursor-pointer bg-Text border-Text placeholder:text-white"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  style={{ background: "main" }}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter password",
                    },
                    { type: "password" },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="Password"
                    className="h-12 text-white cursor-pointer bg-Text border-Text placeholder:text-white"
                  />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full h-12 bg-red-600 ccursor-pointer"
                >
                  Sign In
                </Button>
                <div className="flex items-center justify-between mt-2 ">
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    className="text-red-900"
                  >
                    <Checkbox className="text-gray-400">Remember me</Checkbox>
                  </Form.Item>
                  <Form.Item className="text-gray-400" href="/">
                    Need Help?
                  </Form.Item>
                </div>
                <Link href="/">
                  <h1 className="pt-12 pb-8 text-gray-400 cursor-pointer text-md hover:underline">
                    New to Netflix? <span>Sign up now</span>
                  </h1>
                </Link>
                <Typography.Paragraph
                  ellipsis={{
                    rows: 2,
                    expandable: true,
                    symbol: "Learn More",
                  }}
                  style={{ color: "white", fontSize: 14 }}
                >
                  This page is protectde by Google reCAPTCHA to ensure you&apos;re
                  not a bot. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Voluptate, fugiat.
                </Typography.Paragraph>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
