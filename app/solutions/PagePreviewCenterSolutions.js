import config from "@/config";
import ButtonMain from "@/components/ButtonMain";

const Arrow = ({ extraStyle }) => {
  return (
    <svg
      className={`shrink-0 w-12 fill-neutral-content opacity-70 ${extraStyle}`}
      viewBox="0 0 138 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
        />
      </g>
    </svg>
  );
};
const Step = ({ emoji, text }) => {
  return (
    <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
      <span className="text-4xl">{emoji}</span>
      <h3 className="font-bold">{text}</h3>
    </div>
  );
};

// Problem Agitation: A crucial, yet overlooked, component for a landing page that sells.
// It goes under your Hero section, and above your Features section.
// Your Hero section makes a promise to the customer: "Our product will help you achieve XYZ".
// Your Problem section explains what happens to the customer if its problem isn't solved.
// The copy should NEVER mention your product. Instead, it should dig the emotional outcome of not fixing a problem.
// For instance:
// - Hero: "ShipFast helps developers launch startups fast"
// - Problem Agitation: "Developers spend too much time adding features, get overwhelmed, and quit." (not about ShipFast at all)
// - Features: "ShipFast has user auth, Stripe, emails all set up for you"
const PagePreviewCenterSolutions = () => {
  return (
    <section className="text-neutral-content m-8 lg:m-0 lg:p-12 lg:my-20 lg:mx-32" style={{
      borderColor: config.colors.secondary,
      borderStyle: "solid",
      borderWidth: "4px",
      }}>
      <div className="flex flex-col mx-auto px-2 lg:px-12 py-12 lg:py-16 text-center gap-4 justify-center items-center ">
        <h2 className="mx-auto text-3xl md:text-6xl tracking-tight mb-6 md:mb-8 ">
          <strong>Automation</strong> and <strong>Artificial intelligence</strong>
        </h2>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-0  pb-10 lg:max-w-6xl">
        The combination of RPA and artificial intelligence makes it possible to automate complex tasks and make data-driven decisions in real time. At Robotipy, we help companies implement solutions that go beyond the traditional, integrating AI to maximize efficiency and innovation.
        </p>

        <ButtonMain text="Read more" link="/#" type="tertiary" />

        {/* <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
          <Step emoji="🧑‍💻" text="8 hrs learning about automation" />

          <Arrow extraStyle="max-md:-scale-x-100 md:-rotate-90" />

          <Step emoji="😮‍💨" text="Overwhelmed with information" />

          <Arrow extraStyle="max-md:-scale-x-100 md:-rotate-90" />

          <Step emoji="😩" text="Lose money in first time" />

        </div> */}
      </div>
    </section>
  );
};

export default PagePreviewCenterSolutions;
