import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import fetcher from "../lib/fetcher";

const AuthForm: FC<{ mode: "signup" | "signin" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    await fetcher(`/${mode}`, { email, password });

    setLoading(false);
    router.push("/");
  }

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex justify="center" align="center" height="100vh">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="your email here"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="your password here"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" isLoading={loading}>
            {mode.toUpperCase()}
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default AuthForm;
