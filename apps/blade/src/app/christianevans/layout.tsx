export default function ChristianEvansLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-[] text-[]">
      {props.children}
    </section>
  );
}