import DinoColorEnum from "src/types/DinoColorEnum";

interface PropsInterface {
  color: DinoColorEnum;
}

const ADino = ({ color }: PropsInterface) => {
  return (
    <>
    <h1>FFFFALUT QUENTIN</h1>
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="200"
          cy="180"
          rx="80"
          ry="50"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />

        <ellipse
          cx="280"
          cy="120"
          rx="50"
          ry="40"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />

        <ellipse
          cx="320"
          cy="125"
          rx="25"
          ry="15"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />

        <circle cx="290" cy="110" r="8" fill="white" />
        <circle cx="290" cy="110" r="5" fill="black" />
        <circle cx="292" cy="108" r="2" fill="white" />

        <ellipse cx="335" cy="122" rx="2" ry="3" fill="#2d5a2d" />
        <ellipse cx="340" cy="124" rx="2" ry="3" fill="#2d5a2d" />

        <path
          d="M 310 135 Q 330 140 345 135"
          stroke="#2d5a2d"
          strokeWidth="2"
          fill="none"
        />

        <polygon points="315,135 317,142 319,135" fill="white" />
        <polygon points="322,135 324,142 326,135" fill="white" />
        <polygon points="329,135 331,142 333,135" fill="white" />

        <ellipse
          cx="160"
          cy="160"
          rx="15"
          ry="8"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />
        <ellipse
          cx="145"
          cy="165"
          rx="8"
          ry="5"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />

        <ellipse
          cx="170"
          cy="220"
          rx="12"
          ry="25"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />
        <ellipse
          cx="200"
          cy="220"
          rx="12"
          ry="25"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />

        <ellipse
          cx="168"
          cy="250"
          rx="18"
          ry="8"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />
        <ellipse
          cx="202"
          cy="250"
          rx="18"
          ry="8"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />

        <path d="M 155 245 L 150 240" stroke="#2d5a2d" strokeWidth="2" />
        <path d="M 165 242 L 160 237" stroke="#2d5a2d" strokeWidth="2" />
        <path d="M 175 242 L 180 237" stroke="#2d5a2d" strokeWidth="2" />

        <path d="M 189 245 L 184 240" stroke="#2d5a2d" strokeWidth="2" />
        <path d="M 199 242 L 194 237" stroke="#2d5a2d" strokeWidth="2" />
        <path d="M 209 242 L 214 237" stroke="#2d5a2d" strokeWidth="2" />

        <ellipse
          cx="120"
          cy="190"
          rx="40"
          ry="15"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />
        <ellipse
          cx="70"
          cy="200"
          rx="30"
          ry="10"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />
        <ellipse
          cx="35"
          cy="205"
          rx="20"
          ry="8"
          fill={color}
          stroke="#2d5a2d"
          strokeWidth="2"
        />

        <polygon points="180,140 185,125 190,140" fill="#2d5a2d" />
        <polygon points="200,135 205,120 210,135" fill="#2d5a2d" />
        <polygon points="220,140 225,125 230,140" fill="#2d5a2d" />
        <polygon points="240,145 245,130 250,145" fill="#2d5a2d" />

        <ellipse cx="180" cy="200" rx="8" ry="6" fill="#66b366" opacity="0.7" />
        <ellipse cx="210" cy="195" rx="6" ry="4" fill="#66b366" opacity="0.7" />
        <ellipse cx="220" cy="205" rx="5" ry="3" fill="#66b366" opacity="0.7" />
      </svg>
    </>
  );
};

export default ADino;
