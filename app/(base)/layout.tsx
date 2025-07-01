import { BaseProvider } from "@/components/providers";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseProvider>{children}</BaseProvider>;
}
