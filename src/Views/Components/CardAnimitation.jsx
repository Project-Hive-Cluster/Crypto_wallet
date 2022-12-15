import "../../Styles/cardlist.css"
import { uniqueNamesGenerator, names } from "unique-names-generator"
import cardGen from "card-number-generator"

export default function CardList() {
  const config = {
    dictionaries: [names],
  }
  return (
    <div className="glassify__Wrapper">
      <div className="glassify__ContentWrapper">
        <div className="glassify__CertificateWrapper hjzcfo cards">
          <div className="gl__card__Wrapper card4">
            <div className="gl__card__TextWrapper">
              <div className="gl__card__TitleWrapper">
                <p className="gl__card__Title">
                  {uniqueNamesGenerator(config)}
                </p>
                <p className="gl__card__Description">
                  {cardGen({ issuer: "Visa" }).replace(
                    /^(.{4})(.{4})(.{4})(.*)$/,
                    "$1 $2 $3 $4"
                  )}
                </p>
              </div>
              <div className="gl__card__PlaceholderWrapper">
                <div
                  width="60"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_01"
                ></div>
                <div
                  width="90"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_02"
                ></div>
                <div
                  width="80"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_03"
                ></div>
                <div
                  width="120"
                  height="6"
                  opacity="0.4"
                  className="Placeholder__Wrapper placeholder_04"
                ></div>
              </div>
            </div>
            <div className="lazyload-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#1976D2"
                  d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                />
                <path
                  fill="#FFF"
                  d="M22.255 20l-2.113 4.683L18.039 20h-2.695v6.726L12.341 20h-2.274L7 26.981h1.815l.671-1.558h3.432l.682 1.558h3.465v-5.185l2.299 5.185h1.563l2.351-5.095v5.095H25V20H22.255zM10.135 23.915l1.026-2.44 1.066 2.44H10.135zM37.883 23.413L41 20.018h-2.217l-1.994 2.164L34.86 20H28v6.982h6.635l2.092-2.311L38.767 27h2.21L37.883 23.413zM33.728 25.516h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234.012 1.693 1.897L33.728 25.516z"
                />
              </svg>
            </div>
          </div>
          <div className="gl__card__Wrapper card3">
            <div className="gl__card__TextWrapper">
              <div className="gl__card__PlaceholderWrapper">
                <div
                  width="60"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_01"
                ></div>
                <div
                  width="90"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_02"
                ></div>
                <div
                  width="80"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_03"
                ></div>
                <div
                  width="120"
                  height="6"
                  opacity="0.4"
                  className="Placeholder__Wrapper placeholder_04"
                ></div>
              </div>
            </div>
            <div className="lazyload-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#ffc107"
                  d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
                />
                <path
                  fill="#fff8e1"
                  d="M17,34V14h8.199c2.41,0,4.234,0.465,5.48,1.395s1.867,2.293,1.867,4.086c0,0.98-0.25,1.844-0.746,2.59c-0.5,0.746-1.195,1.293-2.086,1.641c1.016,0.258,1.816,0.773,2.402,1.555C32.703,26.043,33,26.992,33,28.121c0,1.922-0.609,3.379-1.828,4.367S28.219,33.98,25.965,34H17z M21,22h4.363c2.063-0.035,3.098-0.824,3.098-2.445c0-0.906-0.262-1.559-0.785-1.957S26.328,17,25.199,17H21V22z M21,25v6h4.844C26.805,31,29,30.531,29,28.391S27.883,25.027,26,25H21z"
                />
                <path
                  fill="#fff8e1"
                  d="M20 11h3v5h-3V11zM25 11h3v5h-3V11zM20 32h3v5h-3V32zM25 32h3v5h-3V32z"
                />
              </svg>
            </div>
          </div>
          <div className="gl__card__Wrapper card2">
            <div className="gl__card__TextWrapper">
              <div className="gl__card__TitleWrapper">
                <p className="gl__card__Title">
                  {uniqueNamesGenerator(config)}
                </p>
                <p className="gl__card__Description">
                  {cardGen({ issuer: "Visa" }).replace(
                    /^(.{4})(.{4})(.{4})(.*)$/,
                    "$1 $2 $3 $4"
                  )}
                </p>
              </div>
              <div className="gl__card__PlaceholderWrapper">
                <div
                  width="60"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_01"
                ></div>
                <div
                  width="90"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_02"
                ></div>
                <div
                  width="80"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_03"
                ></div>
                <div
                  width="120"
                  height="6"
                  opacity="0.4"
                  className="Placeholder__Wrapper placeholder_04"
                ></div>
              </div>
            </div>
            <div className="lazyload-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#ff9800"
                  d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                />
                <path
                  fill="#d50000"
                  d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                />
                <path
                  fill="#ff3d00"
                  d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                />
              </svg>
            </div>
          </div>
          <div className="gl__card__Wrapper card1">
            <div className="gl__card__TextWrapper">
              <div className="gl__card__TitleWrapper">
                <p className="gl__card__Title">
                  {uniqueNamesGenerator(config)}
                </p>
                <p className="gl__card__Description">
                  {cardGen({ issuer: "Visa" }).replace(
                    /^(.{4})(.{4})(.{4})(.*)$/,
                    "$1 $2 $3 $4"
                  )}
                </p>
              </div>
              <div className="gl__card__PlaceholderWrapper">
                <div
                  width="60"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_01"
                ></div>
                <div
                  width="90"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_02"
                ></div>
                <div
                  width="80"
                  height="4"
                  opacity="0.3"
                  className="Placeholder__Wrapper placeholder_03"
                ></div>
                <div
                  width="120"
                  height="6"
                  opacity="0.4"
                  className="Placeholder__Wrapper placeholder_04"
                ></div>
              </div>
            </div>
            <div className="lazyload-wrapper">
              <svg width="70px" viewBox="0 0 1001 324" version="1.1">
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="Visa_Inc._logo" fillRule="nonzero">
                    <polygon
                      id="polygon9"
                      fill="#fff"
                      points="433.352281 318.983808 352.341546 318.983808 403.011464 5.67909768 484.017769 5.67909768"
                    ></polygon>
                    <path
                      d="M727.023395,13.3385039 C711.044518,6.99922669 685.700699,-0.0001150097 654.36314,-0.0001150097 C574.362437,-0.0001150097 518.026596,42.6604296 517.681059,103.652162 C517.016564,148.651727 558.015873,173.645579 588.680077,188.649864 C620.022066,203.981966 630.676128,213.989253 630.676128,227.655689 C630.35717,248.644854 605.350029,258.319893 582.026273,258.319893 C549.683112,258.319893 532.353097,253.331755 506.016966,241.654372 L495.349615,236.648514 L484.013339,306.978608 C503.013451,315.634756 538.019019,323.316312 574.362437,323.652989 C659.364569,323.652989 714.703668,281.652509 715.359302,216.65609 C715.68269,180.990457 694.03346,153.662015 647.359369,131.330571 C619.025325,116.99521 601.673159,107.329031 601.673159,92.6614232 C602.005406,79.3272342 616.349627,65.669658 648.333961,65.669658 C674.670091,65.0007336 694.02017,71.3311508 708.678918,77.6659981 L716.006077,80.9929003 L727.023395,13.3385039 L727.023395,13.3385039 L727.023395,13.3385039 Z"
                      id="path11"
                      fill="#fff"
                    ></path>
                    <path
                      d="M834.693648,207.991082 C841.365173,189.992142 867.036809,120.330973 867.036809,120.330973 C866.700132,120.999897 873.695043,101.999785 877.6953,90.3356925 L883.356793,117.331888 C883.356793,117.331888 898.697755,192.326733 902.029087,207.991082 C889.368253,207.991082 850.694675,207.991082 834.693648,207.991082 L834.693648,207.991082 Z M934.691205,5.67909768 L872.029377,5.67909768 C852.705878,5.67909768 838.02498,11.3405905 829.68779,31.6741212 L709.356702,318.979378 L794.358834,318.979378 C794.358834,318.979378 808.353088,280.31023 811.361033,271.981899 C820.686105,271.981899 903.375796,271.981899 915.372136,271.981899 C917.697867,282.981498 925.038316,318.979378 925.038316,318.979378 L1000.04645,318.979378 L934.691205,5.67909768 L934.691205,5.67909768 L934.691205,5.67909768 Z"
                      id="path13"
                      fill="#fff"
                    ></path>
                    <path
                      d="M284.67829,5.67909768 L205.34208,219.322928 L196.672643,175.993459 C182.005035,125.996895 136.004298,71.6766879 84.6698856,44.6672029 L157.339,318.651561 L243.005627,318.651561 L370.340486,5.67909768 L284.67829,5.67909768 L284.67829,5.67909768 L284.67829,5.67909768 Z"
                      id="path15"
                      fill="#fff"
                    ></path>
                    <path
                      d="M131.671794,5.67909768 L1.33341981,5.67909768 L9.1820003e-07,12.009515 C101.672084,38.0089684 169.007523,100.679656 196.672643,176.006749 L168.338599,32.0152283 C163.673848,12.005085 149.338487,6.33916219 131.671794,5.67909768 L131.671794,5.67909768 Z"
                      id="path17"
                      fill="#1A1F71"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
