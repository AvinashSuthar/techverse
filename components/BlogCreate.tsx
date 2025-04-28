"use client";

import { createTheme, MantineProvider } from "@mantine/core";
import { Demo } from "./Editor";

const BlogCreate = () => {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "cyan",
  });
  return (
    <MantineProvider
      withCssVariables={false}
      cssVariablesSelector="html"
      theme={theme}
    >
      <Demo />
    </MantineProvider>
  );
};

export default BlogCreate;
