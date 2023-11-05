"use client";

import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
const Register = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState();
  const auth = useAuth();
  const router = useRouter();

  const handleSubmit = (values) => {
    auth.SignUp(user);
    router.push("/movie", { replace: true });
  };

  return (
    <div>
      <div className="fixed top-0 left-0 flex items-center justify-between w-full px-4 text-black bg-white shadow-sm sm:px-8">
        <Link href="/">
          <Image
            width={100}
            height={100}
            src="/images/Logo/Netflix.png"
            alt="Logo"
            className="object-contain h-16"
          />
        </Link>
        <Link href="/login">
          <button className="text-lg">Sign In</button>
        </Link>
      </div>
      <div className="grid px-4 py-32 text-black bg-white place-items-left place-content-center">
        <h6 className="text-xs">STEP 1 OF 3</h6>
        <h1 className="text-2xl font-semibold">
          Create a password to start <br /> your membership
        </h1>
        <p className="py-2 text-sm">
          Just a few more steps and you&apos;re done! <br />
          We hate paperwork too.
        </p>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item name="email">
            <Input
              name="email"
              placeholder={auth.currentUser}
              readOnly
              className="h-12 text-base font-semibold placeholder:text-black"
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password
              name="password"
              placeholder="Add a password"
              className="h-12"
            />
          </Form.Item>
          <Form.Item>
            <Checkbox>
              Please do not email me NetFlix special offers. welcome
            </Checkbox>
          </Form.Item>
          <Button
            htmlType="submit"
            className="w-full h-12 text-lg text-white bg-red-700"
          >
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
