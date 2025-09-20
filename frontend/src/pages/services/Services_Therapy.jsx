import AnimatedArrow from "../../components/AnimatedArrow";

const togetherData = [
  {
    image: "/assets/icons/discussion.png",
    mode: "COUPLE",
    title: "Teen Counseling",
    description:
      "All of us want to feel loved and when we feel disconnected or stuck in a relationship it colors our want to when we feel entire lookout.",
  },
  {
    image: "/assets/icons/happiness.png",
    mode: "INDIVIDUAL",
    title: "No More Depression",
    description:
      "This is one of the diseases that we don’t like to talk about. You or your loved one needn’t suffer alone—please, the diseases that we let us help.",
  },
  {
    image: "/assets/icons/feel-good.png",
    mode: "INDIVIDUAL",
    title: "Anxiety & Stress",
    description:
      "Learn an array of new tools to release yourself from the grip of anxiety or worry that may be holding you back from enjoying life.",
  },
  {
    image: "/assets/icons/self-confident.png",
    mode: "INDIVIDUAL",
    title: "Self-Confidence",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new cloud solution.",
  },
  {
    image: "/assets/icons/family.png",
    mode: "FAMILY",
    title: "Parenting Skills",
    description:
      "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
  },
  {
    image: "/assets/icons/link.png",
    mode: "INDIVIDUAL",
    title: "Group Therapy",
    description:
      "Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web enabled.",
  },
];

export default function Services_Therapy() {
  return (
    <div>
      {/* Service Details */}
      <section className="relative flex items-center justify-center bg-[url('/assets/hero_services.jpg')] bg-cover  text-white py-50  mb-4">
        <div className="flex w-[80%]">
          <div className="relative z-10 max-w-7xl  flex-col ">
            <h1 className="font-plus-jakarta mb-4 tracking-widest  ">
              SERVICES
            </h1>
            <p className="font-castoro text-4xl md:text-6xl  mb-2">
              Online Therapy & Counselling Service
            </p>
            <button className="border-1 border-white mr-4 px-5 py-2 rounded-4xl hover:bg-white hover:text-black  font-semibold transition-colors duration-300 mt-5">
              From / $50
            </button>
            <AnimatedArrow href="/appointment" txt_value="Book a Session" />
          </div>
          <div className="hidden md:block w-[50%]"> </div>
        </div>

        <img
          className="absolute bottom-0 z-10 "
          src="/assets/white_bottom.png"
        />
      </section>
      <section>
        <p className="font-plus-jakarta  tracking-widest text-center font-semibold text-md mb-4 text-[#578FCA]">
          THE PROCESS
        </p>
        <h1 className="font-castoro text-3xl md:text-5xl text-center text-[#2b2c2e]">
          How Does It <i>Work?</i>
        </h1>
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center ">
          <div className="flex flex-col md:flex-row justify-center items-center mt-10 mb-10">
            <div className="flex-col justify-center items-center text-center p-5 max-w-75  m-3  ">
              <span className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-12 h-12"
                >
                  <rect
                    x="21.82"
                    y="18.3"
                    width="43.44"
                    height="62.48"
                    fill="#469baf"
                    opacity="0.7"
                  />
                  <g>
                    <path
                      fill="#161919"
                      d="M57.16,42.94H28.37a1,1,0,0,1,0-2H57.16a1,1,0,0,1,0,2Z"
                    />
                    <path
                      fill="#161919"
                      d="M57.16,50.41H28.37a1,1,0,0,1,0-2H57.16a1,1,0,1,1,0,2Z"
                    />
                    <path
                      fill="#161919"
                      d="M57.16,57.47H28.37a1,1,0,0,1,0-2H57.16a1,1,0,1,1,0,2Z"
                    />
                    <path
                      fill="#161919"
                      d="M53.51,18a1,1,0,0,1-1-1V14.31H34.45V17a1,1,0,0,1-2,0V13.31a1,1,0,0,1,1-1H53.51a1,1,0,0,1,1,1V17A1,1,0,0,1,53.51,18Z"
                    />
                    <path
                      fill="#161919"
                      d="M46.65,24.83H40.31A7.87,7.87,0,0,1,32.45,17a1,1,0,0,1,2,0,5.87,5.87,0,0,0,5.86,5.86h6.34A5.87,5.87,0,0,0,52.51,17a1,1,0,0,1,2,0A7.87,7.87,0,0,1,46.65,24.83Z"
                    />
                    <path
                      fill="#161919"
                      d="M47,19.3H40.18a1,1,0,0,1,0-2H47a1,1,0,1,1,0,2Z"
                    />
                    <path
                      fill="#161919"
                      d="M71.05,87.69H15.56a1,1,0,0,1-1-1V13.31a1,1,0,0,1,1-1H28.05a1,1,0,0,1,0,2H16.56V85.69H70.05V14.31H57.64a1,1,0,0,1,0-2H71.05a1,1,0,0,1,1,1V86.69A1,1,0,0,1,71.05,87.69Z"
                    />
                    <path
                      fill="#161919"
                      d="M65.26,81.78H21.82a1,1,0,0,1-1-1V18.3a1,1,0,0,1,1-1h5.95a1,1,0,1,1,0,2H22.83V79.78H64.26V19.3H58.48a1,1,0,0,1,0-2h6.78a1,1,0,0,1,1,1V80.78A1,1,0,0,1,65.26,81.78Z"
                    />
                    <path
                      fill="#161919"
                      d="M84.44,78.52H78.17a1,1,0,0,1-1-1V45a1,1,0,0,1,1-1h6.27a1,1,0,0,1,1,1V77.51A1,1,0,0,1,84.44,78.52Zm-5.27-2h4.27V46H79.17Z"
                    />
                    <path
                      fill="#161919"
                      d="M84.44,46a1,1,0,0,1-1-.7l-2.18-6.77-2.18,6.77a1,1,0,1,1-1.91-.62L80.35,35a1,1,0,0,1,1.91,0l3.14,9.73a1,1,0,0,1-1,1.31Z"
                    />
                    <path
                      fill="#161919"
                      d="M81.31,85.47a4.14,4.14,0,0,1-4.14-4.14V77.51a1,1,0,0,1,2,0v3.82a2.13,2.13,0,0,0,4.27,0V77.51a1,1,0,1,1,2,0v3.82A4.14,4.14,0,0,1,81.31,85.47Z"
                    />
                  </g>
                </svg>
              </span>
              <h1 className="font-castoro text-2xl md:text-3xl  text-[#2b2c2e]">
                Fill a Form
              </h1>
              <p className="text-[#2b2c2e] ">
                Tell us a little more about what you’re looking for, online or
                over the phone.
              </p>
            </div>
            <div className="border-t border-black w-5"></div>
            <div className="flex-col justify-center items-center text-center p-5 max-w-75  m-3  ">
              <span className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-12 h-12"
                >
                  <g>
                    <path
                      fill="#479baf"
                      opacity="0.7"
                      d="M73.09,29.65l-2.81,1.22a2.14,2.14,0,0,1-1.45.08l-5.5-1.64c-.66-.2-1.32-.4-2-.62-2.44-.83-12.61-3.76-19.56,2.48l-1.08,1.43a31.41,31.41,0,0,1-5.3,5.47,31.6,31.6,0,0,0-2.49,2.2,3.1,3.1,0,0,0,1.89,5.29c2.29.17,5.22-.55,8.26-3.79,0,0,3.93-4.39,7.95-3.11,0,0,21.37,9.23,25.12,18.73L82.7,52"
                    />
                    <path
                      fill="#479baf"
                      opacity="0.7"
                      d="M44.39,79a4.52,4.52,0,0,0,4.16,1h0c1.76-.54,4.17-2.66,3.67-4.6-.32-1.22-1.74-2.14-3.43-2.4a4.13,4.13,0,0,0-.5-3,4.43,4.43,0,0,0-3.68-1.87A4.69,4.69,0,0,0,44,65.29,5.14,5.14,0,0,0,40.09,63c1-4.74-5.86-4.66-9-4.38A6,6,0,0,0,28,59.75a3,3,0,0,0-1.15,3.72C27.19,64.52,40.18,75.46,44.39,79Z"
                    />
                  </g>

                  <path
                    fill="#479baf"
                    opacity="0.7"
                    d="M27.16,26.63a2.47,2.47,0,0,1,1.16,3.28L28,30.6,17,53.42l-.17.36a2.47,2.47,0,0,1-3.31,1.15L2.4,49.57a2.47,2.47,0,0,1-1.15-3.3l11.5-23.86A2.47,2.47,0,0,1,16,21.26Z"
                  />

                  <g>
                    <path
                      fill="#161919"
                      d="M76.15,58.4a1,1,0,0,1-.93-.63C71.75,49,51.79,40.1,50.68,39.61c-3.33-1-6.82,2.8-6.85,2.84-3.47,3.71-6.84,4.29-9.08,4.12a4,4,0,0,1-3.47-2.64,4.08,4.08,0,0,1,.95-4.36,32.56,32.56,0,0,1,2.57-2.27A30.45,30.45,0,0,0,39.92,32L41,30.57l.13-.14c7.27-6.52,17.57-3.7,20.55-2.68.64.22,1.28.41,1.93.61L69.12,30a1.15,1.15,0,0,0,.77,0l2.8-1.22a1,1,0,1,1,.8,1.84l-2.81,1.22a3.13,3.13,0,0,1-2.14.12L63,30.28c-.67-.2-1.34-.41-2-.63C59.11,29,49.17,26,42.54,31.86l-1,1.35a32.44,32.44,0,0,1-5.47,5.64A30.49,30.49,0,0,0,33.64,41a2.1,2.1,0,0,0-.48,2.24,2,2,0,0,0,1.74,1.34c2.6.19,5.11-1,7.45-3.48.16-.18,4.4-4.84,9-3.38l.09,0c.85.37,20.08,8.76,25.08,18.06l5.56-4.55a1,1,0,1,1,1.27,1.55l-6.55,5.36A1,1,0,0,1,76.15,58.4Z"
                    />
                    <path
                      fill="#161919"
                      d="M26.76,61.2a1,1,0,0,1-.66-.25c-1.71-1.5-7.76-5.44-9.57-6.62l-.11-.07a1,1,0,0,1,1.1-1.68l.1.07c2.36,1.53,8,5.25,9.8,6.79a1,1,0,0,1-.66,1.76Z"
                    />
                    <path
                      fill="#161919"
                      d="M35.73,33.45a15.76,15.76,0,0,1-5.28-.92l-2.79-1a1,1,0,0,1,.67-1.89l2.79,1a13.06,13.06,0,0,0,10-.38c.23-.11.47-.23.7-.37a1,1,0,0,1,1,1.75c-.27.15-.54.29-.82.43A14.42,14.42,0,0,1,35.73,33.45Z"
                    />
                    <path
                      fill="#161919"
                      d="M54,80.64a9.85,9.85,0,0,1-4.33-1.24,1,1,0,0,1,.94-1.77c.83.44,2.93,1.4,4.4.85a4.33,4.33,0,0,0,2.36-2.26,1,1,0,0,1,1.25-.55,3.83,3.83,0,0,0,5.25-3.57,1,1,0,0,1,.36-.77,1,1,0,0,1,.82-.22,3.84,3.84,0,0,0,3.62-1.3,4.08,4.08,0,0,0,.73-3.56,1,1,0,0,1,.2-1,1,1,0,0,1,.92-.34,4.66,4.66,0,0,0,4.81-7,1,1,0,1,1,1.73-1,6.8,6.8,0,0,1-.44,7.62A6.71,6.71,0,0,1,71.48,67a5.76,5.76,0,0,1-5.76,6.16,5.81,5.81,0,0,1-1.77,3.22,5.93,5.93,0,0,1-5.19,1.39,6.28,6.28,0,0,1-3.08,2.56A4.81,4.81,0,0,1,54,80.64Z"
                    />
                    <path
                      fill="#161919"
                      d="M47.08,80.62a5.68,5.68,0,0,1-3.63-1.36h0C26.06,64.7,25.73,63.7,25.6,63.27a3.94,3.94,0,0,1,1.5-4.82,7,7,0,0,1,3.62-1.32c3.18-.28,7.36-.18,9.23,1.93a3.78,3.78,0,0,1,.94,2.61,5.8,5.8,0,0,1,3.69,2.6,5.5,5.5,0,0,1,.76,2.39,5.11,5.11,0,0,1,3.52,2.25,5,5,0,0,1,.74,2.74,4.53,4.53,0,0,1,3.31,2.93c.67,2.57-2.08,5.11-4.34,5.81A5.16,5.16,0,0,1,47.08,80.62Zm-2.35-2.9a3.5,3.5,0,0,0,3.22.77c1.41-.43,3.34-2.15,3-3.39-.2-.78-1.27-1.46-2.6-1.66a1,1,0,0,1-.83-1.2A3.1,3.1,0,0,0,47.17,70a3.45,3.45,0,0,0-2.8-1.4,1.06,1.06,0,0,1-.76-.32,1,1,0,0,1-.27-.77,3.65,3.65,0,0,0-.48-2.19,4.12,4.12,0,0,0-3.13-1.8,1,1,0,0,1-.92-1.21,2,2,0,0,0-.36-1.91c-1-1.12-3.83-1.6-7.56-1.27a5,5,0,0,0-2.58.92,2,2,0,0,0-.83,2.53c.75,1,7.48,7,17.26,15.14Z"
                    />
                    <path
                      fill="#161919"
                      d="M27.93,65.49a1,1,0,0,1,0-2,36.59,36.59,0,0,0,11.55-1.92,1,1,0,0,1,.64,1.9,38.59,38.59,0,0,1-12.18,2Z"
                    />
                    <path
                      fill="#161919"
                      d="M33.32,70.32a1,1,0,0,1,0-2,34.26,34.26,0,0,0,3.88-.26A36.53,36.53,0,0,0,44,66.56a1,1,0,1,1,.61,1.91A38.56,38.56,0,0,1,37.43,70a36.3,36.3,0,0,1-4.1.27Z"
                    />
                    <path
                      fill="#161919"
                      d="M39.47,75.59a1,1,0,0,1-.07-2c.88-.1,1.77-.23,2.62-.39a35,35,0,0,0,6.15-1.7,1,1,0,0,1,.71,1.88,37,37,0,0,1-6.5,1.79c-.91.17-1.85.31-2.79.42Z"
                    />
                  </g>

                  <path
                    fill="#161919"
                    d="M14.57,56.19a3.46,3.46,0,0,1-1.51-.35L2,50.47A3.48,3.48,0,0,1,.34,45.83L11.84,22a3.48,3.48,0,0,1,4.65-1.62L27.6,25.72a3.49,3.49,0,0,1,1.64,4.61l-.33.69L17.7,54.22a3.49,3.49,0,0,1-3.13,2ZM15,22a1.48,1.48,0,0,0-.49.08,1.46,1.46,0,0,0-.84.75L2.15,46.7a1.47,1.47,0,0,0,.69,2L13.93,54a1.47,1.47,0,0,0,2-.68L27.42,29.48a1.48,1.48,0,0,0-.69-1.95h0L15.61,22.16A1.47,1.47,0,0,0,15,22Z"
                  />

                  <path
                    fill="#161919"
                    d="M85.2,55.05A3.49,3.49,0,0,1,82,52.95L71.55,28.56A3.48,3.48,0,0,1,73.39,24l11.34-4.87A3.48,3.48,0,0,1,89.3,21L99.72,45.34a3.48,3.48,0,0,1-1.82,4.57h0L86.57,54.77A3.44,3.44,0,0,1,85.2,55.05Zm.9-34.16a1.45,1.45,0,0,0-.58.12L74.18,25.88a1.47,1.47,0,0,0-.78,1.91L74,29.26l9.83,22.9a1.47,1.47,0,0,0,1.93.77l11.33-4.86a1.47,1.47,0,0,0,.77-1.93L87.46,21.79A1.48,1.48,0,0,0,86.1,20.89ZM97.5,49h0Z"
                  />
                </svg>
              </span>
              <h1 className="font-castoro text-2xl md:text-3xl  text-[#2b2c2e]">
                Get matched
              </h1>
              <p className="text-[#2b2c2e] ">
                We’ll match you with a local therapist. You decide if they’re
                the right fit.
              </p>
            </div>
            <div className="border-t border-black w-5"></div>
            <div className="flex-col justify-center items-center text-center p-5 max-w-75  m-3  ">
              <span className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-10 h-10"
                >
                  <rect
                    x="32.1"
                    y="7.5"
                    width="35.8"
                    height="58.4"
                    rx="3.27"
                    ry="3.27"
                    transform="translate(86.7 -13.3) rotate(90)"
                    fill="#479baf"
                    opacity="0.7"
                  />
                  <path
                    fill="#161919"
                    d="M83.77,60.52H16.29A2.51,2.51,0,0,1,13.78,58V15.52A2.51,2.51,0,0,1,16.29,13H83.77a2.51,2.51,0,0,1,2.51,2.51V58A2.51,2.51,0,0,1,83.77,60.52ZM16.29,14.9a.62.62,0,0,0-.62.62V58a.62.62,0,0,0,.62.62H83.77a.62.62,0,0,0,.62-.62V15.52a.62.62,0,0,0-.62-.62Z"
                  />
                  <path
                    fill="#161919"
                    d="M76.21,55.63H23.85A4.68,4.68,0,0,1,19.17,51V22.57a4.68,4.68,0,0,1,4.67-4.67H76.21a4.68,4.68,0,0,1,4.67,4.67V51A4.68,4.68,0,0,1,76.21,55.63ZM23.85,19.79a2.79,2.79,0,0,0-2.78,2.78V51a2.79,2.79,0,0,0,2.78,2.78H76.21A2.79,2.79,0,0,0,79,51V22.57a2.79,2.79,0,0,0-2.78-2.78Z"
                  />
                  <path
                    fill="#161919"
                    d="M47.27,85H9.51A2.51,2.51,0,0,1,7,82.48V80.11a2.49,2.49,0,0,1,.13-.79l6.7-20a.94.94,0,1,1,1.79.6l-6.7,20a.62.62,0,0,0,0,.2v2.38a.62.62,0,0,0,.62.62H47.27a.94.94,0,1,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M53.08,80.8H7.94a.94.94,0,1,1,0-1.89H53.08a.94.94,0,1,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M90.49,85H47.27a.94.94,0,1,1,0-1.89H90.49a.62.62,0,0,0,.62-.62V80.11a.62.62,0,0,0,0-.2l-6.7-20a.94.94,0,1,1,1.79-.6l6.7,20a2.49,2.49,0,0,1,.13.79v2.38A2.51,2.51,0,0,1,90.49,85Z"
                  />
                  <path
                    fill="#161919"
                    d="M92.06,80.8h-39a.94.94,0,1,1,0-1.89h39a.94.94,0,0,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M65.08,77.37H32.35A2.51,2.51,0,0,1,30,74.07l0-.13a2.5,2.5,0,0,1,2.38-1.71H65a2.52,2.52,0,0,1,2.35,1.63l0,.13a2.51,2.51,0,0,1-2.35,3.39Z"
                  />
                  <path
                    fill="#161919"
                    d="M31.27,65.54h-2.1a.94.94,0,0,1,0-1.89h2.1a.94.94,0,0,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M38.86,65.54h-2.1a.94.94,0,0,1,0-1.89h2.1a.94.94,0,0,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M46.45,65.54h-2.1a.94.94,0,0,1,0-1.89h2.1a.94.94,0,0,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M54,65.54h-2.1a.94.94,0,0,1,0-1.89H54a.94.94,0,0,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M61.64,65.54h-2.1a.94.94,0,0,1,0-1.89h2.1a.94.94,0,0,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M69.23,65.54h-2.1a.94.94,0,0,1,0-1.89h2.1a.94.94,0,0,1,0,1.89Z"
                  />

                  {/* second row keys */}
                  <path
                    fill="#161919"
                    d="M31.27,68.83h-2.1a.94.94,0,0,1,0-1.89h2.1a.94.94,0,0,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M38.86,68.83h-2.1a.94.94,0,0,1,0-1.89h2.1a.94.94,0,1,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M46.45,68.83h-2.1a.94.94,0,0,1,0-1.89h2.1a.94.94,0,1,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M54,68.83h-2.1a.94.94,0,0,1,0-1.89H54a.94.94,0,1,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M61.64,68.83h-2.1a.94.94,0,0,1,0-1.89h2.1a.94.94,0,1,1,0,1.89Z"
                  />
                  <path
                    fill="#161919"
                    d="M69.23,68.83h-2.1a.94.94,0,1,1,0-1.89h2.1a.94.94,0,1,1,0,1.89Z"
                  />
                </svg>
              </span>
              <h1 className="font-castoro text-2xl md:text-3xl  text-[#2b2c2e]">
                Schedule
              </h1>
              <p className="text-[#2b2c2e] ">
                Schedule your first in-person or virtual session. See real
                change in your life.
              </p>
            </div>
          </div>

          <div className="h-auto max-h-max max-w-max min-w-60 upDown flex flex-col items-center justify-center  bg-[#4FA2B8] m-2.5 p-5 py-9 rounded-2xl">
            <h3 className="font-weight: 600; font-serif text-2xl  py-3 text-white">
              Need More Info?
            </h3>
            <p className="text-center  text-white">
              Talk to our Coordinator
              <br />
              Mon – Fri: 5am – 7pm
              <br />
              Saturday: 8am – 5pm
              <br />
            </p>
            <button className="w-[80%] rounded-3xl my-4 bg-white p-2 relative overflow-hidden px-6 py-2 font-semibold text-black group">
              <span className="relative z-10">Call Us</span>
              <span className="absolute left-0 top-0 h-full w-0 bg-[#F7931E] transition-all duration-500 ease-out group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </section>
      <section className="mx-auto flex flex-col md:flex-row justify-center items-center mb-5">
        <img
          className=" h-75 w-75 md:h-100 md:w-100 object-cover p-3 bg-white m-10"
          src="assets/Service_1.png"
        />
        <div className=" flex-col justify-center items-center p-4 max-w-150">
          <h3 className="font-plus-jakarta  tracking-widest font-semibold text-md mb-2 text-[#4FA2B8]">
            SERVICES
          </h3>
          <h1 className="font-castoro text-2xl md:text-5xl  text-[#2b2c2e] mb-4">
            Individual Therapy
          </h1>
          <p>
            We often tend to people who want to experience more satisfaction,
            joy, resiliency in their lives. Other times people fell down,
            unexcited about life, happiness and just want to stop feeling that
            way. General areas we address.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              "Relationships",
              "Family Dynamics",
              "Sadness/Depression",
              "Anxiety",
              "Trauma",
              "Life Transitions",
            ].map((x) => (
              <li
                key={x}
                className="flex items-center gap-2 rounded-lg p-1 font-semibold"
              >
                <span className=" font-extrabold  text-amber-500 ">
                  {" "}
                  &#10003;
                </span>
                {x}
              </li>
            ))}
          </ul>
          <div>
            <button className="border-1 border-black mr-4 px-5 py-3 rounded-4xl hover:bg-[#2b2c2e] hover:text-white  font-semibold transition-colors duration-300 mt-5">
              From / $50
            </button>
              <AnimatedArrow href="/appointment" txt_value="Book a Session" />
          </div>
        </div>
      </section>
      <section className="mx-auto flex flex-col-reverse md:flex-row justify-center items-center mb-5">
        <div className=" flex-col justify-center items-center p-4 max-w-150">
          <h3 className="font-plus-jakarta  tracking-widest font-semibold text-md mb-2 text-[#4FA2B8]">
            SERVICES
          </h3>
          <h1 className="font-castoro text-2xl md:text-5xl  text-[#2b2c2e] mb-4">
            Couples Therapy
          </h1>
          <p>
            Relationships can be incredibly rewarding but they can also require
            some hard work, with difficulties in relationships being a common
            issue for many people strive to feel like they’re doing something
            good.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              "Feelings of Drifting Apart",
              "Frequent Arguments",
              "Loss of Intimacy",
              "Loss of Fulfilling Sex Life",
            ].map((x) => (
              <li
                key={x}
                className="flex items-center gap-2 rounded-lg p-1 font-semibold"
              >
                <span className=" font-extrabold  text-amber-500 ">
                  {" "}
                  &#10003;
                </span>
                {x}
              </li>
            ))}
          </ul>
          <div>
            <button className="border-1 border-black mr-4 px-5 py-3 rounded-4xl hover:bg-[#2b2c2e] hover:text-white  font-semibold transition-colors duration-300 mt-5">
              From / $50
            </button>
              <AnimatedArrow href="/appointment" txt_value="Book a Session" />
          </div>
        </div>
        <img
          className=" h-75 w-75 md:h-100 md:w-100 object-cover p-3 bg-white m-10"
          src="assets/Service_2.png"
        />
      </section>
      <section>
        <img className=" h-30 w-[100%] " src="/assets/bg-brush-grey-up.png" />
        <div className="w-[100%] bg-[#f1f1f1] py-10">
          <h3 className="font-plus-jakarta text-center tracking-widest font-semibold text-md mb-2 text-[#4FA2B8]">
            SERVICES
          </h3>
          <h1 className="font-castoro text-2xl md:text-5xl mb-10 text-[#2b2c2e] text-center">
            What We Can Do <i>Together</i>
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10 justify-items-center md:px-15">
            {togetherData.map((item, idx) => (
              <li key={idx} className="max-w-90 m-4">
                <h3 className="text-amber-500 tracking-widest text-sm mb-3 leading-0">
                  {item.mode}
                </h3>
                <div className="flex items-center space-x-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-3 w-6 h-6"
                  />
                  <h1 className="font-castoro text-2xl mb-2 text-[#2b2c2e]">
                    {item.title}
                  </h1>
                </div>
                <p className="mb-4">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <img className=" h-30 w-[100%] " src="/assets/bg-brush-grey-down.png" />
        
      </section>
    </div>
  );
}
