"use client"

import { useState } from "react";
import { FreQuestion } from "./HomeData";
import AccordionText from "./AccordionText";
import { Button, Form, Input } from "antd";
import { FaChevronRight } from "react-icons/fa";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const Question = () => {
  const [user, setUser] = useState("");
  const router = useRouter();
  const auth = useAuth();
  const [form] = Form.useForm();

  const handleSignup = (values) => {
    auth.SignUp(user);
    router.push("/start", { replace: true });
  };

  return (
    <div className="w-full h-full px-1 pt-10 pb-5 bg-main sm:px-4 lg:pt-20">
      <header className="text-4xl font-bold text-center mb-9 lg:text-5xl">
        Frequently Asked Questions
      </header>
      <div className="">
        {FreQuestion.map((question) => {
          return (
            <div key={question.id}>
              <AccordionText
                title={question.title}
                desc={question.desc}
                subdesc={question.subdesc}
              />
            </div>
          );
        })}
      </div>
      <div className="justify-center text-center pt-14 flexCol">
        <h1 className="text-lg sm:text-xl">
          Ready to watch? Enter your email to create or restart your membership
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
              placeholder="Email address"
              className="text-lg text-white border cursor-pointer bg-glass w-80 h-14 sm:w-96 border-stone-600 placeholder:text-white focus:border-white hover:border-white"
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
  );
};

export default Question;
