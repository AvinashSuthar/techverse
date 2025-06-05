import { signInSchema } from "./zod";
import { prisma } from "./prisma";
import { executeAction } from "./executeActions";

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");
      console.log(email, password);
      const validatedData = signInSchema.parse({ email, password });
      await prisma.user.create({
        data: {
          email: validatedData.email.toLocaleLowerCase(),
          password: validatedData.password,
        },
      });
    },
    successMessage: "Signed up successfully",
  });
};

export { signUp };
