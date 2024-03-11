export default function AuthLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">{props.children}</div>
  );
}
