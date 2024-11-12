export const metadata = {
  title: "Auth",
  description: "Ecommerce developed by Roshan",
};
export default function AuthLayout({ children }) {
  return (
    <div className="container ">
      <div className="   mb-xl-12 ">{children}</div>
    </div>
  );
}
