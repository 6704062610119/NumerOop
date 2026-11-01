// หน้า Home รวมลิงก์ไปแต่ละ Numerical Method
import { Link } from "react-router-dom";

export default function Home() {
  // กำหนดหมวดหมู่และหัวข้อแต่ละ Numerical Method
  const categories = [
    {
      title: "1. Root of Equation",
      topics: [
        { id: "graphicalmethod", name: "Graphical Method", path: "/graphicalmethod" },
        { id: "bisection", name: "Bisection search", path: "/bisection" },
        { id: "falseposition", name: "False-position methods", path: "/falseposition" },
        { id: "onepoint", name: "One-point Iteration methods", path: "/onepoint" },
        { id: "newtonraphson", name: "Newton-Raphson methods", path: "/newtonraphson" },
        { id: "secant", name: "Secant methods", path: "/secant" },
      ],
    },
    {
      title: "2. Linear Algebra Equation",
      topics: [
        { id: "cramer", name: "Cramer’s rule", path: "/cramer" },
        { id: "gaussian", name: "Gauss elimination", path: "/gaussian" },
        { id: "gaussjordan", name: "Gauss Jordan elimination", path: "/gaussjordan" },
        { id: "matrixinversion", name: "Matrix Inversion", path: "/matrixinversion" },
        { id: "ludecomposition", name: "LU Decomposition Methods", path: "/ludecomposition" },
        { id: "jacobi", name: "Jacobi Iteration Methods", path: "/jacobi" },
        { id: "conjugategradient", name: "Conjugate Gradient Methods", path: "/conjugategradient" },
      ],
    },
        {
          title: "3. Interpolation",
          topics: [
            { id: "newtondiv", name: "Newton divided-differences", path: "/polynomialinterp" },
            { id: "lagrangeinterp", name: "Lagrange interpolation", path: "/lagrangeinterp" },
            { id: "cubicspline", name: "Cubic Spline", path: "/cubicspline" },
            { id: "linearspline", name: "Linear Spline", path: "/linearspline" },
            { id: "quadraticspline", name: "Quadratic Spline", path: "/quadraticspline" },
          ],
        },
    {
      title: "4. Extrapolation",
      topics: [
        { id: "simplereg", name: "Simple Regression", path: "/singlelinear" },
        { id: "multiplereg", name: "Multiple Regression", path: "/multiplelinear" },
      ],
    },
    {
      title: "5. Integration",
      topics: [
        { id: "trapezoidal", name: "Trapezoidal Rule", path: "/singletrapezoidal" },
        { id: "compositetrap", name: "Composite Trapezoidal Rule", path: "/compositetrapezoidal" },
        { id: "simpson", name: "Simpson Rule", path: "/simpsonsrule" },
        { id: "compositesimpson", name: "Composite Simpson Rule", path: "/compositesimpson" },
      ],
    },
    {
      title: "6. Differentiation",
      topics: [
        { id: "numericaldiff", name: "Numerical Differentiation", path: "/differentiation" },
      ],
    },
  ];

  // ส่วนแสดงผลหน้า Home
  return (
    <main className="home-page">
      {/* หัวข้อหลัก */}
      <h1 className="home-title text-3xl font-bold text-[#108ab1] fade-in">
        Numerical Methods
      </h1>

      <div className="home-grid">
        {categories.map((cat) => (
          <section
            key={cat.title}
            className="home-category bg-slate-800 rounded-xl shadow-lg fade-in-delay1"
          >
            <h2 className="home-category-title text-lg font-semibold">
              {cat.title}
            </h2>
            <ul className="home-topic-list">
              {cat.topics.map((t) => (
                <li
                  key={t.id}
                  className="home-topic bg-slate-700 rounded-md hover:bg-slate-600 transition-colors"
                >
                  <Link to={t.path} className="home-topic-link">
                    <span>{t.name}</span>
                    <span className="home-topic-arrow" aria-hidden="true">›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
