import React from "react";
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
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput
            label="Password"
            placeholder="Enter a password"
            required
            mt="md"
          />
          <PasswordInput
            label="Re-type password"
            placeholder="Enter a password"
            required
            mt="md"
          />
          <Button fullWidth mt="xl">
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
