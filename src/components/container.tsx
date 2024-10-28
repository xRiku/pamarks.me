type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <section className="flex flex-row flex-wrap gap-4">{children}</section>
  );
}
