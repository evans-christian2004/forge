export default function ChristianEvansLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-[#865ce0] text-[#e0e6fc]">
      {props.children}
    </section>
  );
}