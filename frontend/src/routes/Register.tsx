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
  const [phoneNr, setPhoneNr] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');

  function handleLogin() {
    console.log(mail)
    console.log(pass)
    console.log(pass2)
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
          Register!
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput value={mail} onChange={(event) => setMail(event.currentTarget.value)} label="Email" placeholder="you@mantine.dev" required />
          <TextInput value={phoneNr} onChange={(event) => setPhoneNr(event.currentTarget.value)} label="Phone number" placeholder="07sinoi2" required />
          <PasswordInput value={pass} onChange={(event) => setPass(event.currentTarget.value)}
            label="Password"
            placeholder="Enter a password"
            required
            mt="md"
          />
          <PasswordInput value={pass2} onChange={(event) => setPass2(event.currentTarget.value)}
            label="Re-type password"
            placeholder="Enter a password"
            required
            mt="md"
          />
          <Button onClick={handleLogin} fullWidth mt="xl">
            Sign up
          </Button>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Have an account?{" "}
            <Link to="/login">Sign-in</Link>
          </Text>
        </Paper>
      </Container>
    </main>
  );
}
