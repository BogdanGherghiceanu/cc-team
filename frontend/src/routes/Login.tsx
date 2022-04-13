import React from "react";
import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";

export default function AuthenticationTitle() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  function handleLogin() {
    //API call log user
    console.log(mail)
    console.log(pass)
  }

  return (
    <main>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput value={mail} onChange={(event) => setMail(event.currentTarget.value)} label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput value={pass} onChange={(event) => setPass(event.currentTarget.value)}
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Link to="/reset">Forgot password?</Link>
            {/* <Anchor<"a">
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
            >
              Forgot password?
            </Anchor> */}
          </Group>
          <Button onClick={handleLogin} fullWidth mt="xl">
            Sign in
          </Button>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Link to="/register">Create account</Link>
            {/* <Anchor<"a">
            href="/register"
            size="sm"
            onClick={(event) => event.preventDefault()}
          >
            
          </Anchor> */}
          </Text>
        </Paper>
      </Container>
    </main>
  );
}
