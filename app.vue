<template>
  <div :class="{'dark-theme': darkTheme}" class="app" id="app">
    <title>CryptoPay</title>
    <header class="container">
      <div class="row head-items align-items-center justify-content-between">
        <div class="col-3 header-logo col-lg-3"><a href="#">
          <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" version="1.1">
            <g>
              <polygon fill="#44A3DD" points="0 0 64 0 64 64 0 64"/>
              <path
                  d="M12.5002858,23 L25.6761004,23 C26.6656866,23 27.5759827,23.5413597 28.0484682,24.4108643 L39.7799231,46 L24.081859,46 C23.0922729,46 22.1819767,45.4586403 21.7094912,44.5891357 L11.1823037,25.2161865 C10.7867648,24.4882851 11.0561979,23.5775568 11.7840993,23.1820179 C12.0039143,23.0625713 12.2501137,23 12.5002858,23 Z"
                  fill="#BEE5F7"/>
              <path
                  d="M51.5910069,23 C51.8411791,23 52.0873785,23.0625713 52.3071934,23.1820179 C53.0130373,23.5655707 53.2877777,24.4335625 52.943121,25.1495294 L52.9089891,25.2161865 L42.3818016,44.5891357 C41.9245575,45.4305918 41.0572931,45.9647321 40.1049406,45.9983172 L40.0094337,46 L24.5560452,46 L24.081859,46 L23.9861474,45.9983099 C23.4883845,45.9807184 23.0138729,45.8263853 22.6090091,45.5629027 C22.8118648,45.6793724 23.0414562,45.7544235 23.2863079,45.7765197 C23.3123502,45.7788699 23.522255,45.7983421 23.7558113,45.7356356 C23.8545852,45.7091163 24.2192366,45.6239743 24.6056229,45.2625823 C24.7211639,45.1545153 24.8827176,44.9224567 25.0902842,44.5664065 L36.0428245,24.4108643 C36.5000686,23.5694082 37.367333,23.0352679 38.3196855,23.0016828 L38.4151924,23 L51.5910069,23 Z"
                  fill="#FFFFFF"/>
            </g>
          </svg>
        </a></div>
        <div class="col header-bullets-wrapper col-xl-5">
          <div class="header-bullets row text-center font-medium justify-content-center">
            <a class="col-1 w-auto" href="#">Use cases</a>
            <a class="col-1 w-auto" href="#">Features</a>
            <a class="col-1 w-auto" href="#">How to starts</a>
          </div>
        </div>
        <div class="col header-btns col-lg-2 col-xl-3">
          <div class="row align-items-center justify-content-end">
            <button @click="toggleTheme" class="col-1 w-auto i-mode" id="toggleBtn">
              <svg class="i-sun" :style="{ display: modeLight }" xmlns="http://www.w3.org/2000/svg" width="32"
                   height="32" viewBox="0 0 32 32" fill="none">
                <g clip-path="url(#clip0_15982_31)">
                  <path
                      d="M16.0002 22.6666C19.6821 22.6666 22.6668 19.6818 22.6668 15.9999C22.6668 12.318 19.6821 9.33325 16.0002 9.33325C12.3183 9.33325 9.3335 12.318 9.3335 15.9999C9.3335 19.6818 12.3183 22.6666 16.0002 22.6666Z"
                      stroke="#111111" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                  <path d="M16 1.33325V3.99992" stroke="#111111" stroke-opacity="0.8" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 28V30.6667" stroke="#111111" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M5.62646 5.62671L7.5198 7.52004" stroke="#111111" stroke-opacity="0.8" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.48 24.48L26.3733 26.3733" stroke="#111111" stroke-opacity="0.8" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.3335 16H4.00016" stroke="#111111" stroke-opacity="0.8" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M28 16H30.6667" stroke="#111111" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M5.62646 26.3733L7.5198 24.48" stroke="#111111" stroke-opacity="0.8" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.48 7.52004L26.3733 5.62671" stroke="#111111" stroke-opacity="0.8" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <svg class="i-moon" :style="{ display: modeDark }" xmlns="http://www.w3.org/2000/svg" width="26"
                   height="26" viewBox="0 0 26 26" fill="none">
                <path
                    d="M25 14.0533C24.7902 16.3229 23.9385 18.4859 22.5443 20.2891C21.1502 22.0922 19.2713 23.4611 17.1276 24.2354C14.9839 25.0097 12.664 25.1575 10.4393 24.6615C8.21468 24.1654 6.17732 23.0461 4.56562 21.4344C2.95393 19.8227 1.83458 17.7853 1.33853 15.5607C0.842491 13.336 0.990279 11.0161 1.7646 8.8724C2.53893 6.72868 3.90776 4.84982 5.71094 3.45567C7.51412 2.06152 9.67705 1.20974 11.9467 1C10.6179 2.79769 9.97846 5.0126 10.1447 7.24189C10.3109 9.47117 11.2718 11.5667 12.8525 13.1475C14.4332 14.7282 16.5288 15.689 18.7581 15.8553C20.9874 16.0215 23.2023 15.3821 25 14.0533Z"
                    stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
              </svg>
            </button>
            <a href="#" :class="{'btn-head-dark': darkTheme}"
               class="col-1 w-auto text-deep-blue btn btn-secondary-light">Get started</a>
          </div>
        </div>
      </div>
    </header>
    <div class="container hero-block mt-4">
      <div class="row align-items-center">
        <div class="col-12 col-lg-7">
          <div class="hero-block_title d-block d-lg-none"><h1>Crypto payments for <br><span class="text-blue">telegram bots</span>
          </h1></div>
          <div class="hero-block_title d-none d-lg-block"><h1>Crypto payments <br> for <span class="text-blue">telegram bots</span>
          </h1></div>
          <div class="desc mt-3">
            <div>Seamlessly accept crypto payments <br> in your Telegram bots and services.</div>
            <div class="mt-3">
              <a href="#" class="col font-medium text-white btn btn-general">Get started</a>
            </div>
          </div>
          <div :class="{'bot-list-dark': darkTheme}" class="bot-list mt-5 position-relative">
            <div class="bot-item"><img src="./static/images/bot1.svg" alt="bot"></div>
            <div class="bot-item"><img src="./static/images/bot5.svg" alt="bot"></div>
            <div class="bot-item"><img src="./static/images/bot4.svg" alt="bot"></div>
            <div class="bot-item"><img src="./static/images/bot3.svg" alt="bot"></div>
            <div class="bot-item"><img src="./static/images/bot2.svg" alt="bot"></div>
          </div>
          <div class="mt-1">Popular bots use Crypto Pay</div>
        </div>
        <div class="img-phone-block col col-lg-5">
          <img :style="{ display: imageDisplay }" src="./static/images/img_phone.png" loading="lazy" alt="phone"/>
          <img :style="{ display: imageDisplayDark }" src="./static/images/mockupdark.png" loading="lazy" alt="phone"/>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-7 bg-dark">
      <div class="container">
        <div class="slider" id="carousel-trigger">
          <ul class="nav-dots row" id="js-dots">
            <li class="nav-dot col"></li>
            <li class="nav-dot col"></li>
            <li class="nav-dot col"></li>
          </ul>
          <div class="main">
            <section class="section">
              <div class="usecases-block align-items-center row">
                <div class="col-xl-5 col-lg-7 col-12 usecases usecases-1">
                  <div class="usecases-msg">
                    <div class="msg-text-usecase msg-text-no-tail bg-white">
                      <img class="emoji" src="./static/emoji/money.png" alt=""> You sent 5,5 USDT
                      ($5.50).<br><br>
                      <b>Recipient:</b> GoodsBot <br><br>
                      <img class="emoji" src="./static/emoji/receipt.png" alt=""> 1 month of Blazing Fast
                      VPN
                      <img class="emoji" src="./static/emoji/flash.png" alt="">
                      <div class="mt-1">
                        <div class="msg-time-span time-usecase">21:25</div>
                      </div>
                    </div>
                    <div class="msg-text-usecase msg-text-no-tail bg-white">
                      <img class="emoji" src="./static/emoji/key.png" alt=""> Access key:
                      VPN-X3Y7-Z1W9-R6T2-Q4V8
                      <div class="mt-1">
                        <div class="msg-time-span time-usecase">21:25</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="usecases-text col-xl-6 col-lg-9 d-xl-block d-none text-white">
                  <h2><span class="text-blue">Instant <br>Auto Sales:</span> <br>Boost conversion</h2>
                  <div class="desc mt-3">
                    <div>Immediately deliver digital products <br>and services to your users.</div>
                  </div>
                  <a href="#" class="col btn btn-usecase-desc btn-general text-white mt-3">Open API Docs</a>
                </div>
                <div class="usecases-text d-block d-lg-block d-xl-none col-12 text-white">
                  <h2><span class="text-blue">Instant Auto Sales: <br></span>Boost conversion</h2>
                  <div class="desc mt-3">
                    <div>Immediately deliver digital products <br class="d-lg-none">and services to your users.</div>
                    <a href="#" class="col btn btn-usecase-desc btn-general text-white mt-3">Open API Docs</a>
                  </div>
                </div>
              </div>
            </section>
            <section class="section">
              <div class="usecases-block row align-items-center">
                <div class="col-lg-5 col-12 usecases usecases-2">
                  <div class="usecases-msg">
                    <div class="msg-text-usecase radius-btm msg-text-no-tail bg-white">
                      <div>
                        <img class="emoji" src="./static/emoji/money.png" alt=""> You sent 3,5 TON
                        ($5.08).
                      </div>
                      <div class="mt-1"><b>Recipient:</b> CuteCats Channel</div>
                      <div class="mt-1">
                        <img class="emoji" src="./static/emoji/receipt.png" alt=""> Exclusive access to the
                        channel <img class="emoji" src="./static/emoji/cat.png" alt="">
                      </div>
                      <div class="mt-1">
                        <div class="msg-time-span time-usecase">21:30</div>
                      </div>
                    </div>
                    <div class="row msg-btn-list">
                      <div class="msg-btn msg-btn-usecase radius-top msg-btn-full">
                        View Channel
                        <svg class="svg-view" xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                             viewBox="0 0 10 10" fill="none">
                          <path d="M1.79395 8.7059L8.941 1.55884M8.941 1.55884V8.7059M8.941 1.55884H1.79395"
                                stroke="white" stroke-width="2.02195" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="usecases-text col-xl-6 col-lg-9 d-xl-block d-lg-block text-white">
                  <h2><span class="text-blue">Channels <br class="d-none d-xl-block">integration:</span> <br>Seamless
                    access</h2>
                  <div class="desc mt-3">
                    <div>Automatically unlock exclusive content<br>to your users.</div>
                    <a href="#" class="col btn btn-usecase-desc btn-general text-white mt-3">Open API Docs</a>
                  </div>
                </div>
              </div>
            </section>
            <section class="section">
              <div class="usecases-block row align-items-center">
                <div class="col-5 usecases usecases-3">
                  <div class="usecases-msg">
                    <div class="msg-text-usecase radius-btm msg-text-no-tail bg-white">
                      <div>
                        <img class="emoji" src="./static/emoji/money.png" alt=""> You sent 3,99 USDT
                        ($3.99).
                      </div>
                      <div class="mt-1">
                        <b>Recipient: </b><span class="text-deep-blue">@StoresBot</span>
                      </div>
                      <div class="mt-1">
                        <img class="emoji" src="./static/emoji/receipt.png" alt=""> One month of Premium
                        access
                        <img class="emoji" src="./static/emoji/star.png" alt="">
                      </div>
                      <div class="mt-1">
                        <div class="msg-time-span time-usecase">21:45</div>
                      </div>
                      <div class="svg-usecase-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
                          <rect x="0.103027" y="0.985352" width="45.2647" height="45.2647" rx="12.4256"
                                fill="url(#paint0_linear_955_4706)"/>
                          <ellipse cx="22.9516" cy="13.4892" rx="2.74116" ry="2.74116" fill="white"/>
                          <ellipse cx="22.9516" cy="22.104" rx="2.74116" ry="2.74116" fill="white"/>
                          <path
                              d="M24.3415 35.8337C23.6849 36.8464 22.2049 36.8464 21.5483 35.8337L18.1257 30.5551C17.4061 29.4453 18.2012 27.9782 19.5223 27.9782L26.3675 27.9782C27.6886 27.9782 28.4838 29.4453 27.7642 30.5551L24.3415 35.8337Z"
                              fill="white"/>
                          <defs>
                            <linearGradient id="paint0_linear_955_4706" x1="41.6334" y1="-25.6797" x2="-18.1734"
                                            y2="19.0193" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#9FCCFA"/>
                              <stop offset="1" stop-color="#0974F1"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div class="invoice-block invoice-usecase">
                      <span class="code-blue">Invoice</span>( <br>
                      <div class="row">
                        <div class="col-1 pe-0 ms-4 w-auto code-blue">
                          <div>payload:</div>
                          <div>status:</div>
                          <div>amount:</div>
                          <div>asset:</div>
                        </div>
                        <div class="col">
                          <div>“item:monthly_premium”,</div>
                          <div>“paid”,</div>
                          <div>“3.99”,</div>
                          <div>“USDT”</div>
                        </div>
                      </div>
                      )
                    </div>
                  </div>
                </div>
                <div class="usecases-text col-xl-6 col-lg-9 d-xl-block d-lg-block text-white">
                  <h2><span class="text-blue">Endless <br class="d-xl-block d-none">customization:</span><br>with
                    Webhooks</h2>
                  <div class="desc mt-3">
                    <div>Receive successful payment notifications in<br>real-time. Integrate to any scenario of your
                      service.
                    </div>
                    <a href="#" class="col btn btn-usecase-desc btn-general text-white mt-3">Open API Docs</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-6">
      <div class="token-block row">
        <div :class="{'dark-block': darkTheme}" class="features-block col" id="block_currencies">
          <div class="row block_currencies">
            <div class="col-12 currencies-text">
              <h3>Accept a wide range of cryptocurrencies</h3>
              <div class="mt-2">Bill any supported cryptocurrencies with asset parameter in <span class="text-blue">GetInvoice</span>
                method
              </div>
            </div>
            <div class="col-12 currencies-tokens">
              <div :class="{'dark-block-list': darkTheme}" class="token-list row mt-4">
                <div class="col token text-center">
                  <svg class="token-svg"
                       xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                    <rect width="96" height="96" rx="48" fill="url(#paint0_linear_955_3960)"/>
                    <rect width="96" height="96" rx="48" fill="url(#paint1_linear_955_3960)"/>
                    <path d="M47.7656 16.582L47.332 18.0186V59.6998L47.7656 60.1217L67.6018 48.6852L47.7656 16.582Z"
                          fill="#343434"/>
                    <path d="M47.7624 16.582L27.9258 48.6852L47.7624 60.1217V39.8908V16.582Z" fill="#8C8C8C"/>
                    <path d="M47.7639 63.7846L47.5195 64.0753V78.9227L47.7639 79.6186L67.6122 52.354L47.7639 63.7846Z"
                          fill="#3C3C3B"/>
                    <path d="M47.7624 79.6186V63.7846L27.9258 52.354L47.7624 79.6186Z" fill="#8C8C8C"/>
                    <path d="M47.7617 60.1206L67.5979 48.684L47.7617 39.8896V60.1206Z" fill="#141414"/>
                    <path d="M27.9258 48.6842L47.7624 60.1207V39.8898L27.9258 48.6842Z" fill="#393939"/>
                    <defs>
                      <linearGradient id="paint0_linear_955_3960" x1="147.491" y1="-39.2727" x2="-37.5273" y2="145.745"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E9E9E7"/>
                        <stop offset="0.271524" stop-color="#EFEEEC"/>
                        <stop offset="0.608677" stop-color="#EEEEEC"/>
                        <stop offset="1" stop-color="#D5D4D0"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_955_3960" x1="10" y1="164" x2="108.259" y2="143.218"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EEEDF1"/>
                        <stop offset="1" stop-color="white"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="token-desc">eth</div>
                </div>
                <div class="col token text-center">
                  <svg class="token-svg" xmlns="http://www.w3.org/2000/svg" width="97" height="96" viewBox="0 0 97 96"
                       fill="none">
                    <rect x="0.714355" width="96" height="96" rx="48" fill="url(#paint0_linear_955_3970)"/>
                    <path d="M71.5022 22.6909H25.3081V33.8431H42.8291V50.2347H53.9812V33.8431H71.5022V22.6909Z"
                          fill="white"/>
                    <path
                        d="M48.5113 51.9808C34.0174 51.9808 22.2666 49.6869 22.2666 46.8569C22.2666 44.0274 34.0169 41.7331 48.5113 41.7331C63.0051 41.7331 74.7554 44.0274 74.7554 46.8569C74.7554 49.6869 63.0051 51.9808 48.5113 51.9808ZM77.9795 47.7111C77.9795 44.0621 64.7863 41.1042 48.5113 41.1042C32.2367 41.1042 19.0425 44.0621 19.0425 47.7111C19.0425 50.9246 29.2731 53.6019 42.8298 54.1951V77.7258H53.981V54.2044C67.6421 53.6297 77.9795 50.9412 77.9795 47.7111Z"
                        fill="white"/>
                    <defs>
                      <linearGradient id="paint0_linear_955_3970" x1="9.87799" y1="131.782" x2="57.4416" y2="30.5454"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8DDAD5"/>
                        <stop offset="1" stop-color="#1BA27A"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="token-desc">usdt</div>
                </div>
                <div class="col token text-center">
                  <svg class="token-svg" xmlns="http://www.w3.org/2000/svg" width="97" height="96" viewBox="0 0 97 96"
                       fill="none">
                    <rect x="0.428711" width="96" height="96" rx="48" fill="url(#paint0_linear_955_3976)"/>
                    <path
                        d="M64.8175 26.7903H32.0374C26.0103 26.7903 22.1904 33.2917 25.2225 38.5475L45.4531 73.6129C46.7733 75.9025 50.0817 75.9025 51.4018 73.6129L71.6366 38.5475C74.6647 33.3001 70.8446 26.7903 64.8216 26.7903H64.8175ZM45.4366 63.0973L41.0307 54.5703L30.3998 35.5566C29.6985 34.3397 30.5647 32.7802 32.0333 32.7802H45.4325V63.1014L45.4366 63.0973ZM66.4469 35.5525L55.8201 54.5744L51.4142 63.0973V32.7761H64.8134C66.282 32.7761 67.1482 34.3355 66.4469 35.5525Z"
                        fill="white"/>
                    <defs>
                      <linearGradient id="paint0_linear_955_3976" x1="89.8833" y1="-7.41818" x2="14.3923" y2="117.382"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#04BEFE"/>
                        <stop offset="1" stop-color="#4481EB"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="token-desc">ton</div>
                </div>
                <div class="col token text-center">
                  <svg class="token-svg" xmlns="http://www.w3.org/2000/svg" width="97" height="96" viewBox="0 0 97 96"
                       fill="none">
                    <rect x="0.143066" width="96" height="96" rx="48" fill="url(#paint0_linear_955_3980)"/>
                    <path
                        d="M71.2642 41.0905C72.3168 34.0423 66.9489 30.2551 59.6033 27.7264L61.9828 18.1746L56.1718 16.7269L53.8558 26.0239C52.33 25.6438 50.7601 25.2832 49.2015 24.9299L51.5329 15.5713L45.7219 14.1236L43.3403 23.6663C42.0757 23.3774 40.8317 23.0937 39.6267 22.7936L39.6339 22.7648L31.6196 20.7639L30.0728 26.9728C30.0728 26.9728 34.3868 27.9602 34.2933 28.0199C36.6498 28.6069 37.0746 30.1626 37.0027 31.398L34.2923 42.2781C34.4568 42.319 34.6645 42.3795 34.8948 42.4718L34.282 42.3192L30.4807 57.5609C30.1935 58.2754 29.4635 59.3469 27.8175 58.9412C27.8751 59.0254 23.5939 57.889 23.5939 57.889L20.7092 64.542L28.2763 66.4271C29.6828 66.7775 31.0625 67.1474 32.4176 67.4937L30.0155 77.1535L35.8224 78.6002L38.203 69.0442C39.7864 69.4735 41.3255 69.8701 42.8348 70.2461L40.4614 79.7558L46.2724 81.2034L48.6734 71.5652C58.5841 73.4402 66.0451 72.683 69.1786 63.7164C71.7062 56.4984 69.0536 52.3309 63.8377 49.6166C67.6402 48.7472 70.5028 46.2505 71.2642 41.0905ZM57.9853 59.7139C56.1876 66.9302 44.0333 63.0333 40.0893 62.0508L43.2781 49.2505C47.22 50.2412 59.8599 52.1891 57.9853 59.7139ZM59.7772 40.9845C58.1413 47.5512 48.0186 44.2128 44.7358 43.3993L47.6265 31.7956C50.9124 32.6142 61.4868 34.1392 59.7772 40.9845Z"
                        fill="white"/>
                    <path d="M34.3657 42.0254L35.2294 42.2405L35.0706 42.8779L34.2069 42.6627L34.3657 42.0254Z"
                          fill="white"/>
                    <defs>
                      <linearGradient id="paint0_linear_955_3980" x1="-16.4388" y1="163.2" x2="78.6885" y2="3.29727e-06"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF930F"/>
                        <stop offset="1" stop-color="#FBC411"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="token-desc">btc</div>
                </div>
                <div class="col token text-center">
                  <svg class="token-svg" xmlns="http://www.w3.org/2000/svg" width="97" height="96" viewBox="0 0 97 96"
                       fill="none">
                    <rect x="0.857422" width="96" height="96" rx="48" fill="url(#paint0_linear_955_3986)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M75.885 39.4775C74.7423 38.4224 73.4175 37.1361 72.037 35.7957C70.0979 33.913 68.049 31.9236 66.2407 30.3186L66.0575 30.1904C65.7527 29.9456 65.4091 29.7537 65.0409 29.6225L63.645 29.3621C54.0148 27.5652 22.801 21.741 22.1589 21.8191C21.969 21.8457 21.7875 21.9146 21.6277 22.0206L21.4537 22.158C21.2394 22.3756 21.0767 22.6385 20.9774 22.9274L20.9316 23.0464V23.6967V23.7975C23.0508 29.6984 28.5558 42.8766 33.6388 55.0446L33.6389 55.0448L33.639 55.0449L33.6391 55.0451C37.9364 65.3324 41.9321 74.8975 43.3251 78.7325L43.3256 78.7341C43.509 79.3023 43.857 80.3811 44.5066 80.436H44.6532C45.0012 80.436 46.485 78.476 46.485 78.476C46.485 78.476 73.0091 46.31 75.6927 42.8846C76.04 42.4626 76.3467 42.0088 76.6086 41.5291C76.7445 40.7656 76.4698 39.9868 75.885 39.4775ZM53.291 43.2233L64.6114 33.8354L71.2516 39.9536L53.291 43.2233ZM29.4043 26.6367L48.8944 42.6098L60.9384 32.4526L29.4043 26.6367ZM50.6527 46.7954L70.6007 43.5806L47.7951 71.0573L50.6527 46.7954ZM47.2626 45.6319L26.7559 28.23L44.2951 71.0753L47.2626 45.6319Z"
                          fill="white"/>
                    <defs>
                      <linearGradient id="paint0_linear_955_3986" x1="63.6938" y1="13.9636" x2="0.857425" y2="143.127"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FC070C"/>
                        <stop offset="1" stop-color="#F45C43"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="token-desc">trx</div>
                </div>
                <div class="col token text-center">
                  <svg class="token-svg" xmlns="http://www.w3.org/2000/svg" width="97" height="96" viewBox="0 0 97 96"
                       fill="none">
                    <g clip-path="url(#clip0_955_3996)">
                      <path
                          d="M48.5714 90.8049C72.2119 90.8049 91.3763 71.6405 91.3763 48C91.3763 24.3596 72.2119 5.19519 48.5714 5.19519C24.931 5.19519 5.7666 24.3596 5.7666 48C5.7666 71.6405 24.931 90.8049 48.5714 90.8049Z"
                          fill="white"/>
                      <g filter="url(#filter0_dd_955_3996)">
                        <path
                            d="M48.5713 0C39.0778 0 29.7975 2.81515 21.9039 8.08946C14.0104 13.3638 7.8581 20.8603 4.22509 29.6312C0.592087 38.4021 -0.358473 48.0532 1.49362 57.3643C3.34571 66.6754 7.91727 75.2282 14.6302 81.9411C21.3431 88.654 29.8959 93.2256 39.207 95.0777C48.5181 96.9298 58.1693 95.9792 66.9401 92.3462C75.711 88.7132 83.2075 82.5609 88.4818 74.6674C93.7562 66.7738 96.5713 57.4935 96.5713 48C96.5896 41.7149 95.3699 35.4876 92.9816 29.6739C90.5933 23.8602 87.0833 18.5738 82.652 14.1166C78.2206 9.65937 72.9548 6.11861 67.1551 3.69648C61.3554 1.27436 55.1354 0.0182884 48.8502 0H48.5713ZM49.3849 49.6271L44.3873 66.4794H71.1185C71.2956 66.4732 71.4722 66.502 71.6381 66.564C71.8041 66.6261 71.9562 66.7203 72.0857 66.8412C72.2152 66.9621 72.3196 67.1073 72.393 67.2686C72.4664 67.4299 72.5072 67.604 72.5132 67.7811V68.2228L70.1888 76.2421C70.0863 76.6214 69.8579 76.9545 69.5411 77.1868C69.2243 77.4191 68.8379 77.5368 68.4454 77.5206H27.535L34.3921 54.1598L26.7214 56.4843L28.4648 51.138L36.1355 48.8136L45.782 16.0387C45.8882 15.6616 46.1175 15.3309 46.4334 15.0992C46.7493 14.8675 47.1337 14.7482 47.5253 14.7603H57.8691C58.0462 14.7541 58.2228 14.7828 58.3887 14.8449C58.5547 14.907 58.7068 15.0012 58.8363 15.122C58.9658 15.2429 59.0702 15.3882 59.1436 15.5495C59.217 15.7107 59.2578 15.8849 59.2638 16.062V16.5036L51.1282 44.1646L58.7989 41.8402L57.1718 47.4189L49.3849 49.6271Z"
                            fill="url(#paint0_linear_955_3996)"/>
                      </g>
                    </g>
                    <defs>
                      <filter id="filter0_dd_955_3996" x="-7.42871" y="-8" width="112" height="112"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="4"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.715625 0 0 0 0 0.728516 0 0 0 0 0.75 0 0 0 0.04 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_955_3996"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="1.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow_955_3996" result="effect2_dropShadow_955_3996"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_955_3996" result="shape"/>
                      </filter>
                      <linearGradient id="paint0_linear_955_3996" x1="16.5713" y1="-2.5" x2="76.0713" y2="102"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3F68A8"/>
                        <stop offset="1" stop-color="#2C5493"/>
                      </linearGradient>
                      <clipPath id="clip0_955_3996">
                        <rect width="96" height="96" fill="white" transform="translate(0.571289)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <div class="token-desc">ltc</div>
                </div>
                <div class="col token text-center">
                  <svg class="token-svg" xmlns="http://www.w3.org/2000/svg" width="97" height="96" viewBox="0 0 97 96"
                       fill="none">
                    <rect x="0.285645" width="96" height="96" rx="48" fill="url(#paint0_linear_955_4001)"/>
                    <path
                        d="M61.9839 55.5816C61.9839 48.4318 57.6939 45.9804 49.1139 44.9591C42.9854 44.1418 41.7597 42.5077 41.7597 39.6474C41.7597 36.7871 43.8027 34.949 47.8882 34.949C51.5654 34.949 53.6084 36.1747 54.6297 39.239C54.8341 39.8518 55.447 40.2602 56.0598 40.2602H59.328C60.1453 40.2602 60.7582 39.6474 60.7582 38.8306V38.6261C59.9409 34.1317 56.2638 30.659 51.5654 30.2506V25.3477C51.5654 24.5304 50.9525 23.9176 49.9313 23.7131H46.867C46.0497 23.7131 45.4368 24.326 45.2324 25.3477V30.0461C39.1038 30.8634 35.2227 34.949 35.2227 40.0563C35.2227 46.7977 39.3083 49.4531 47.8882 50.4748C53.6084 51.4961 55.447 52.7218 55.447 55.9905C55.447 59.2593 52.5866 61.5062 48.7055 61.5062C43.3938 61.5062 41.5552 59.2588 40.9424 56.1945C40.7384 55.3777 40.1256 54.9688 39.5127 54.9688H36.0395C35.2227 54.9688 34.6099 55.5816 34.6099 56.3989V56.6034C35.4267 61.7102 38.6954 65.3873 45.4368 66.4091V71.3119C45.4368 72.1287 46.0497 72.7416 47.0709 72.946H50.1352C50.9525 72.946 51.5654 72.3332 51.7698 71.3119V66.4091C57.8984 65.3873 61.9839 61.0973 61.9839 55.5816Z"
                        fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M19.9007 37.809C13.9761 53.5393 22.1477 71.3121 38.0819 77.0318C38.6948 77.4407 39.3076 78.2575 39.3076 78.8703V81.7307C39.3076 82.1391 39.3076 82.3435 39.1032 82.5475C38.8992 83.3648 38.0819 83.7732 37.2646 83.3648C25.8248 79.6876 17.0404 70.9032 13.3633 59.4634C7.2347 40.0565 17.8577 19.4233 37.2646 13.2948C37.4691 13.0908 37.8775 13.0908 38.0819 13.0908C38.8992 13.2948 39.3076 13.9076 39.3076 14.7249V17.5848C39.3076 18.6065 38.8992 19.2194 38.0819 19.6278C29.7064 22.6921 22.965 29.229 19.9007 37.809ZM57.8924 14.1118C58.0964 13.2945 58.9137 12.8861 59.731 13.2945C70.9664 16.9716 79.9552 25.756 83.6324 37.4003C89.7609 56.8072 79.1379 77.4404 59.731 83.5689C59.5266 83.7729 59.1181 83.7729 58.9137 83.7729C58.0964 83.5689 57.688 82.9561 57.688 82.1388V79.2789C57.688 78.2572 58.0964 77.6443 58.9137 77.2359C67.2892 74.1716 74.0306 67.6347 77.0949 59.0547C83.0195 43.3244 74.8479 25.5516 58.9137 19.8319C58.3008 19.423 57.688 18.6062 57.688 17.7889V14.9291C57.688 14.5202 57.688 14.3162 57.8924 14.1118Z"
                          fill="white"/>
                    <defs>
                      <linearGradient id="paint0_linear_955_4001" x1="53.522" y1="39.2727" x2="-38.1144" y2="175.418"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2775CA"/>
                        <stop offset="1" stop-color="#00BBF9"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="token-desc">usdc</div>
                </div>
                <div class="col token text-center">
                  <svg class="token-svg" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"
                       fill="none">
                    <g clip-path="url(#clip0_955_5638)">
                      <mask id="mask0_955_5638" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                            width="96" height="96">
                        <path d="M0 -7.62939e-06H96V96H0V-7.62939e-06Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0_955_5638)">
                        <path
                            d="M48 -7.62939e-06C74.5097 -7.62939e-06 96 21.4903 96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48C0 21.4903 21.4903 -7.62939e-06 48 -7.62939e-06Z"
                            fill="url(#paint0_linear_955_5638)"/>
                        <path
                            d="M35.5799 42.844L42.8479 35.6L44.3799 34.068L48.0118 30.436L60.3798 42.844L67.5798 35.6L48.0118 15.9999L28.3799 35.6L35.5799 42.844Z"
                            fill="white"/>
                        <path d="M40.792 47.988L48.0215 40.7585L55.2509 47.988L48.0215 55.2175L40.792 47.988Z"
                              fill="white"/>
                        <path
                            d="M60.3798 53.1721L48.0079 65.5441L43.6638 61.2001L42.8639 60.4001L35.5799 53.1721L28.3799 60.3721L48.0118 79.972L67.5798 60.3721L60.3798 53.1721Z"
                            fill="white"/>
                        <path d="M16 48.008L23.2295 40.7786L30.4589 48.008L23.2295 55.2375L16 48.008Z" fill="white"/>
                        <path d="M65.5439 48.004L72.7735 40.7745L80.0029 48.004L72.7735 55.2335L65.5439 48.004Z"
                              fill="white"/>
                      </g>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_955_5638" x1="75.6965" y1="108.719" x2="2.72709" y2="-14.8494"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E9B204"/>
                        <stop offset="1" stop-color="#F0B90B"/>
                      </linearGradient>
                      <clipPath id="clip0_955_5638">
                        <rect width="96" height="96" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <div class="token-desc">bnb</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-2 gap-20">
        <div class="col-12 col-xl-5 p-0">
          <div class="row-cols-1">
            <div :class="{'dark-block': darkTheme}" class="col features-block " id="create_block">
              <div class="btn-create-wrapper">
                <a class="btn-create" href="#" id="btn_create">
                  <img :style="{display: emojiDark}" class="emoji emoji-btn palm-align"
                       src="./static/emoji/palmTree.png" alt="">
                  <img :style="{display: emoji}" class="emoji emoji-btn" src="./static/emoji/tree.png" alt="">
                  <span>Create app</span>
                </a>
                <svg class="cursor-icon" xmlns="http://www.w3.org/2000/svg" width="43" height="47" viewBox="0 0 43 47"
                     fill="none">
                  <path
                      d="M11.1275 3.64677C6.7178 1.12449 1.36473 4.88154 2.23774 9.88607L7.45908 39.8172C8.51449 45.8673 16.9001 46.6127 19.006 40.8435L22.4947 31.2864C22.782 30.4994 23.5293 29.9749 24.3671 29.9723L34.541 29.9403C40.6824 29.921 42.8322 21.7813 37.5012 18.7321L11.1275 3.64677Z"
                      fill="url(#paint0_linear_955_3950)" stroke="#F1F5F9" stroke-width="4"/>
                  <defs>
                    <linearGradient id="paint0_linear_955_3950" x1="1.90306" y1="-33.3301" x2="-24.3108" y2="39.2676"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#9FCCFA" offset="0"/>
                      <stop offset="1" stop-color="#0974F1"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 class="mt-1">One click to start</h3>
              <div class="mt-2">Open <a class="link text-blue" href="#">@CryptoBot</a>, go to <a href="#"
                                                                                                 class="link text-blue">Crypto
                Pay</a>
                and tap Create App to get API Token
              </div>
            </div>
            <div :class="{'dark-block': darkTheme}" class="col mt-2 w-auto features-block " id="exchange_block">
              <div class="exchange-list text-center row align-items-center position-relative">
                <div class="exchange-token col token-usdt" id="token3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 97 96" fill="none">
                    <path d="M71.5022 22.6909H25.3081V33.8431H42.8291V50.2347H53.9812V33.8431H71.5022V22.6909Z"
                          fill="white"/>
                    <path
                        d="M48.5113 51.9808C34.0174 51.9808 22.2666 49.6869 22.2666 46.8569C22.2666 44.0274 34.0169 41.7331 48.5113 41.7331C63.0051 41.7331 74.7554 44.0274 74.7554 46.8569C74.7554 49.6869 63.0051 51.9808 48.5113 51.9808ZM77.9795 47.7111C77.9795 44.0621 64.7863 41.1042 48.5113 41.1042C32.2367 41.1042 19.0425 44.0621 19.0425 47.7111C19.0425 50.9246 29.2731 53.6019 42.8298 54.1951V77.7258H53.981V54.2044C67.6421 53.6297 77.9795 50.9412 77.9795 47.7111Z"
                        fill="white"/>
                  </svg>
                </div>
                <div class="exchange-token col token-btc" id="token2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="77" height="82" fill="none">
                    <path
                        d="M71.2642 41.0905C72.3168 34.0423 66.9489 30.2551 59.6033 27.7264L61.9828 18.1746L56.1718 16.7269L53.8558 26.0239C52.33 25.6438 50.7601 25.2832 49.2015 24.9299L51.5329 15.5713L45.7219 14.1236L43.3403 23.6663C42.0757 23.3774 40.8317 23.0937 39.6267 22.7936L39.6339 22.7648L31.6196 20.7639L30.0728 26.9728C30.0728 26.9728 34.3868 27.9602 34.2933 28.0199C36.6498 28.6069 37.0746 30.1626 37.0027 31.398L34.2923 42.2781C34.4568 42.319 34.6645 42.3795 34.8948 42.4718L34.282 42.3192L30.4807 57.5609C30.1935 58.2754 29.4635 59.3469 27.8175 58.9412C27.8751 59.0254 23.5939 57.889 23.5939 57.889L20.7092 64.542L28.2763 66.4271C29.6828 66.7775 31.0625 67.1474 32.4176 67.4937L30.0155 77.1535L35.8224 78.6002L38.203 69.0442C39.7864 69.4735 41.3255 69.8701 42.8348 70.2461L40.4614 79.7558L46.2724 81.2034L48.6734 71.5652C58.5841 73.4402 66.0451 72.683 69.1786 63.7164C71.7062 56.4984 69.0536 52.3309 63.8377 49.6166C67.6402 48.7472 70.5028 46.2505 71.2642 41.0905ZM57.9853 59.7139C56.1876 66.9302 44.0333 63.0333 40.0893 62.0508L43.2781 49.2505C47.22 50.2412 59.8599 52.1891 57.9853 59.7139ZM59.7772 40.9845C58.1413 47.5512 48.0186 44.2128 44.7358 43.3993L47.6265 31.7956C50.9124 32.6142 61.4868 34.1392 59.7772 40.9845Z"
                        fill="white" data-v-inspector="app.vue:151:17"></path>
                  </svg>
                </div>
                <div class="exchange-token col token-ton active1" id="token1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                    <path
                        d="M41.3888 0.790039H8.60872C2.58163 0.790039 -1.23831 7.29147 1.79375 12.5473L22.0244 47.6127C23.3445 49.9023 26.6529 49.9023 27.9731 47.6127L48.2078 12.5473C51.236 7.29987 47.4158 0.790039 41.3929 0.790039H41.3888ZM22.0079 37.0971L17.602 28.57L6.97106 9.55638C6.26975 8.33941 7.13598 6.77992 8.60461 6.77992H22.0038V37.1012L22.0079 37.0971ZM43.0182 9.55227L32.3913 28.5742L27.9855 37.0971V6.77581H41.3847C42.8533 6.77581 43.7195 8.3353 43.0182 9.55227Z"
                        fill="white"/>
                  </svg>
                </div>
                <div class="exchange-arrows col-1 w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"
                       preserveAspectRatio="xMidYMid meet">>
                    <path d="M1 5.45438H20.01M20.01 5.45438L15.5556 1M20.01 5.45438L15.5556 9.90876" stroke="#29313D"
                          stroke-opacity="0.92" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    <path
                        d="M20.0098 14.3632H0.999765M0.999765 14.3632L5.45415 9.90881M0.999765 14.3632L5.45415 18.8176"
                        stroke="#29313D" stroke-opacity="0.92" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="bevel"/>
                  </svg>
                </div>
                <div class="token-dollar col text-white">
                  <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-1 w-auto">$</div>
                  </div>
                </div>
              </div>
              <h3 class="mt-1">Real-time<br>exchange rates</h3>
              <div class="mt-2">Request up to date currency rate with the <a
                  href="#" class="link text-blue">getExchangeRates</a> API method
              </div>
            </div>
          </div>
        </div>
        <div :class="{'dark-block': darkTheme}" class="col features-block " id="messageBlock">
          <div class="msg-bg">
            <div class="msg-block">
              <div class="msg-text bg-white">
                Application Statistics <b>@GoodsBot</b> for <b>all time:</b><br>
                <br>
                Volume: <b>$6,530</b><br>
                <br>
                The number of created invoices: <b>15,569</b> <br>
                Number of payments: <b>6,453</b><br>
                Number of users: <b>5,606</b><br>
                <br>
                Conversion: <b>41%</b>
                <div class="msg-time-span time-usecase">21:30</div>
              </div>
              <div class="text-white text-center">
                <div class="msg-btn-list row">
                  <div class="msg-btn msg-btn-animate active-btn col">All time</div>
                  <div class="msg-btn msg-btn-animate col">Today</div>
                </div>
                <div class="msg-btn-list row">
                  <div class="msg-btn msg-btn-animate col">Yesterday</div>
                  <div class="msg-btn col">Week</div>
                </div>
                <div class="row msg-btn-list">
                  <div class="msg-btn msg-btn-full">Month</div>
                  <div class="msg-btn msg-btn-full">
                    <span class="icon-back">
                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
  <path d="M5.18324 1.63171L1.42725 5.38771L5.18324 9.1437" stroke="white" stroke-width="2.81699" stroke-linecap="round"
        stroke-linejoin="round"/>
</svg>
                    </span>Back
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <h3>Payment statistics</h3>
            <div class="mt-2">Open <a class="link text-blue" href="#">@CryptoBot</a>, go to <a href="#"
                                                                                               class="link text-blue">Crypto
              Pay</a>
              and <a href="" class="link text-blue">My Apps</a>, App Name to get Statistics
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-2 gap-20">
        <div :class="{'dark-block': darkTheme}" class="col-12 col-lg features-block " id="popup_block">
          <div class="phone-msg-block">
            <img :style="{ display: phoneMsg }" src="./static/images/bodyphone.png" loading="lazy" alt="mockup">
            <img class="phoneMsgDark" :style="{ display: phoneMsgDark }" src="./static/images/bodyphonedarkimg.png"
                 loading="lazy" alt="mockup">
            <div class="phone-msg row align-items-center active" id="msg_1">
              <div class="phone-msg-logo col-1 w-auto">
                <img src="./static/images/msg_image.png" alt="">
                <svg class="phone-msg-logo-sm" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                     viewBox="0 0 18 18" fill="none">
                  <rect width="18" height="18" rx="4" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM9.25328 7.16709C8.57242 7.45028 7.21168 8.03641 5.17104 8.92549C4.83967 9.05726 4.66608 9.18617 4.65028 9.31223C4.62357 9.52526 4.89035 9.60914 5.25362 9.72337C5.30304 9.73891 5.35424 9.75501 5.40673 9.77207C5.76414 9.88825 6.24491 10.0242 6.49485 10.0296C6.72156 10.0345 6.97461 9.941 7.25397 9.74917C9.16061 8.46213 10.1448 7.8116 10.2066 7.79758C10.2502 7.78769 10.3106 7.77525 10.3515 7.81162C10.3925 7.848 10.3884 7.9169 10.3841 7.93538C10.3577 8.04805 9.3105 9.02161 8.76858 9.52542C8.59964 9.68249 8.47981 9.79389 8.45531 9.81934C8.40043 9.87634 8.3445 9.93025 8.29075 9.98207C7.95871 10.3022 7.70971 10.5422 8.30454 10.9342C8.59039 11.1225 8.81912 11.2783 9.04732 11.4337C9.29653 11.6034 9.5451 11.7727 9.8667 11.9835C9.94864 12.0372 10.0269 12.093 10.1031 12.1474C10.3931 12.3541 10.6537 12.5399 10.9756 12.5103C11.1627 12.493 11.3559 12.3172 11.454 11.7926C11.6859 10.5529 12.1417 7.86681 12.2471 6.75995C12.2563 6.66297 12.2447 6.53886 12.2354 6.48438C12.226 6.4299 12.2065 6.35228 12.1357 6.29481C12.0519 6.22676 11.9224 6.21241 11.8645 6.21343C11.6012 6.21807 11.1973 6.35852 9.25328 7.16709Z"
                        fill="url(#paint0_linear_11590_551)"/>
                  <defs>
                    <linearGradient id="paint0_linear_11590_551" x1="702" y1="2" x2="702" y2="1391.62"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2AABEE"/>
                      <stop offset="1" stop-color="#229ED9"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="phone-msg-text col">
                <div><b>Crypto Bot</b></div>
                <img class="emoji" src="./static/emoji/money.png" alt=""> You received 3448 TON ($5000)<br>
                from @CryptoBot #A777
                <div class="mt-msg"><img class="emoji" src="./static/emoji/speech.png" alt=""> Design contest awards
                  <img class="emoji"
                       src="./static/emoji/award.png" alt="">
                </div>
                <div :class="{'dark-time-span': darkTheme}" class="msg-time-span msg-now-span">now</div>
              </div>
            </div>
            <div class="phone-msg row align-items-center btm" id="msg_2">
              <div class="phone-msg-logo col-1 w-auto">
                <img src="./static/images/msg_image.png" alt="">
                <svg class="phone-msg-logo-sm" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                     viewBox="0 0 18 18" fill="none">
                  <rect width="18" height="18" rx="4" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM9.25328 7.16709C8.57242 7.45028 7.21168 8.03641 5.17104 8.92549C4.83967 9.05726 4.66608 9.18617 4.65028 9.31223C4.62357 9.52526 4.89035 9.60914 5.25362 9.72337C5.30304 9.73891 5.35424 9.75501 5.40673 9.77207C5.76414 9.88825 6.24491 10.0242 6.49485 10.0296C6.72156 10.0345 6.97461 9.941 7.25397 9.74917C9.16061 8.46213 10.1448 7.8116 10.2066 7.79758C10.2502 7.78769 10.3106 7.77525 10.3515 7.81162C10.3925 7.848 10.3884 7.9169 10.3841 7.93538C10.3577 8.04805 9.3105 9.02161 8.76858 9.52542C8.59964 9.68249 8.47981 9.79389 8.45531 9.81934C8.40043 9.87634 8.3445 9.93025 8.29075 9.98207C7.95871 10.3022 7.70971 10.5422 8.30454 10.9342C8.59039 11.1225 8.81912 11.2783 9.04732 11.4337C9.29653 11.6034 9.5451 11.7727 9.8667 11.9835C9.94864 12.0372 10.0269 12.093 10.1031 12.1474C10.3931 12.3541 10.6537 12.5399 10.9756 12.5103C11.1627 12.493 11.3559 12.3172 11.454 11.7926C11.6859 10.5529 12.1417 7.86681 12.2471 6.75995C12.2563 6.66297 12.2447 6.53886 12.2354 6.48438C12.226 6.4299 12.2065 6.35228 12.1357 6.29481C12.0519 6.22676 11.9224 6.21241 11.8645 6.21343C11.6012 6.21807 11.1973 6.35852 9.25328 7.16709Z"
                        fill="url(#paint0_linear_11590_551)"/>
                  <defs>
                    <linearGradient id="paint0_linear_11590_551" x1="702" y1="2" x2="702" y2="1391.62"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2AABEE"/>
                      <stop offset="1" stop-color="#229ED9"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="phone-msg-text col">
                <div><b>Crypto Bot</b></div>
                <img class="emoji" src="./static/emoji/money.png" alt=""> You received 8478 TON ($10000)<br>
                from @CryptoBot #A820 <br><br>
                <img class="emoji" src="./static/emoji/speech.png" alt=""> Congrats! You are winner <img class="emoji"
                                                                                                         src="./static/emoji/star.png"
                                                                                                         alt="">
                <div :class="{'dark-time-span': darkTheme}" class="msg-time-span msg-now-span">now</div>
              </div>
            </div>
            <div class="phone-msg row align-items-center btm" id="msg_3">
              <div class="phone-msg-logo col-1 w-auto">
                <img src="./static/images/msg_image.png" alt="">
                <svg class="phone-msg-logo-sm" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                     viewBox="0 0 18 18" fill="none">
                  <rect width="18" height="18" rx="4" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM9.25328 7.16709C8.57242 7.45028 7.21168 8.03641 5.17104 8.92549C4.83967 9.05726 4.66608 9.18617 4.65028 9.31223C4.62357 9.52526 4.89035 9.60914 5.25362 9.72337C5.30304 9.73891 5.35424 9.75501 5.40673 9.77207C5.76414 9.88825 6.24491 10.0242 6.49485 10.0296C6.72156 10.0345 6.97461 9.941 7.25397 9.74917C9.16061 8.46213 10.1448 7.8116 10.2066 7.79758C10.2502 7.78769 10.3106 7.77525 10.3515 7.81162C10.3925 7.848 10.3884 7.9169 10.3841 7.93538C10.3577 8.04805 9.3105 9.02161 8.76858 9.52542C8.59964 9.68249 8.47981 9.79389 8.45531 9.81934C8.40043 9.87634 8.3445 9.93025 8.29075 9.98207C7.95871 10.3022 7.70971 10.5422 8.30454 10.9342C8.59039 11.1225 8.81912 11.2783 9.04732 11.4337C9.29653 11.6034 9.5451 11.7727 9.8667 11.9835C9.94864 12.0372 10.0269 12.093 10.1031 12.1474C10.3931 12.3541 10.6537 12.5399 10.9756 12.5103C11.1627 12.493 11.3559 12.3172 11.454 11.7926C11.6859 10.5529 12.1417 7.86681 12.2471 6.75995C12.2563 6.66297 12.2447 6.53886 12.2354 6.48438C12.226 6.4299 12.2065 6.35228 12.1357 6.29481C12.0519 6.22676 11.9224 6.21241 11.8645 6.21343C11.6012 6.21807 11.1973 6.35852 9.25328 7.16709Z"
                        fill="url(#paint0_linear_11590_551)"/>
                  <defs>
                    <linearGradient id="paint0_linear_11590_551" x1="702" y1="2" x2="702" y2="1391.62"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2AABEE"/>
                      <stop offset="1" stop-color="#229ED9"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="phone-msg-text col">
                <div><b>Crypto Bot</b></div>
                <img class="emoji" src="./static/emoji/money.png" alt=""> You received 2300 TON ($1000)<br>
                from @CryptoBot #A820 <br><br>
                <img class="emoji" src="./static/emoji/speech.png" alt=""> We appreciate your interest <img
                  class="emoji" src="./static/emoji/cat.png"
                  alt="">
                <div :class="{'dark-time-span': darkTheme}" class="msg-time-span msg-now-span">now</div>
              </div>
            </div>
          </div>
          <h3 class="mt-3">Send coins to users</h3>
          <div class="mt-2">Automate payouts to users with <a href="" class="link text-blue">transfer</a> API method
          </div>
        </div>
        <div :class="{'dark-block': darkTheme}" class="col-xl-5 col-12 features-block " id="popup_block_2">
          <div class="bg-gradient-blue">
            <div class="msg-bubble position-relative">
              <p class="msg-content anon-msg active">
                <img class="emoji" src="./static/emoji/tree.png" alt=""> <b>Anonymous</b> paid your invoice #IV53.
                You received <b>3442 TON ($5000).</b><br><br>
                <img class="emoji" src="./static/emoji/speech.png" alt=""> A generous donation! Keep working hard <img
                  class="emoji" src="./static/emoji/hard.png" alt="">

              </p>
              <p class="msg-content anon-msg btm">
                <img class="emoji" src="./static/emoji/tree.png" alt=""> <b>Anonymous</b> paid your invoice #IV80.
                You received <b>3823 TON ($6500).</b><br><br>
                <img class="emoji" src="./static/emoji/speech.png" alt=""> A bountiful gift! Keep reaching for the
                stars! <img class="emoji"
                            src="./static/emoji/star.png" alt="">

              </p>
              <p class="msg-content anon-msg btm">
                <img class="emoji" src="./static/emoji/tree.png" alt=""> <b>Anonymous</b> paid your invoice #IV80.
                You received <b>1176 TON ($2000).</b><br><br>
                <img class="emoji" src="./static/emoji/speech.png" alt=""> A substantial gift! Keep striving for
                excellent! <img class="emoji"
                                src="./static/emoji/flash.png" alt="">
              </p>
            </div>
          </div>
          <h3 class="mt-3">Anonymous payments</h3>
          <div class="mt-2">Use allow_anonymous parameter in <a href="#" class="link text-blue">createInvoice</a> method
            to give
            user an option to remain private
          </div>
        </div>
      </div>
    </div>
    <div :class="{'dark-block': darkTheme}" class="container-fluid instruction-wrapper mt-6">
      <div class="instruction-block px-6 container">
        <h2 class="text-center d-lg-none d-block">Quick start using <br><a href="#" class="link text-blue">Crypto
          Pay</a></h2>
        <h2 class="text-center d-none d-lg-block">Quick start using
          <span href="#"
                class="link text-blue">Crypto Pay</span></h2>
        <div>
          <div class="row instruction-step mt-4 align-items-center">
            <div class="step-desc col col-lg">
              <div :class="{'dark-num': darkTheme}" class="num-icon text-center">1</div>
              <div class="step-desc-text">
                <h3 class="mt-2">Authorizing your app</h3>
                <ul class="list-steps list-style-numbered mt-2">
                  <li>Open <a class="link text-blue" href="#">@CryptoBot</a></li>
                  <li>Go to <a class="link text-blue" href="#">Crypto Pay</a></li>
                  <li>Tap <a class="link text-blue" href="#">Create App</a></li>
                  <li>Get <a class="link text-blue" href="#">API Token</a></li>
                </ul>
              </div>
            </div>
            <div class="col col-lg-6">
              <div class="row bg-step bg-purple justify-content-center align-items-center">
                <div class="col-5 w-auto col-12">
                  <div class="usecases-msg usecases-msg-1">
                    <div class="msg-text-usecase radius-btm msg-text-no-tail bg-white">
                      <div>Here is the token for the app <b></b></div>
                      <div class="mt-1">114935:AA9xMcRqHYZYl6CQlkhBStMAwTFQ1s6iJHM</div>
                      <div class="mt-1 mb-2"><img class="emoji" src="./static/emoji/Warning.png" alt=""> This token can
                        be used by anyone to control your app. Keep and store it safely.
                      </div>
                      <div class="mt-1">
                        <div class="msg-time-span">21:30</div>
                      </div>
                    </div>
                    <div class="row msg-btn-list">
                      <div class="msg-btn radius-top msg-btn-usecase msg-btn-full">
                        Revoke Token
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row instruction-step step-revert mt-4 align-items-center">
            <div class="col col-lg-6">
              <div class="row bg-step bg-yellow justify-content-center align-items-center">
                <div class="invoice-block invoice-step col-5">
                  asset<span class="code-blue">=</span><span class="code-yellow">TON</span><span
                    class="code-red">&</span>amount<span class="code-blue">=</span><span class="code-yellow">2.75</span><br>
                  {"asset": <span class="code-blue">"TON"</span>, "amount": <span class="code-blue">"2.75"</span>}
                </div>
              </div>
            </div>
            <div class="step-desc col col-lg">
              <div :class="{'dark-num': darkTheme}" class="num-icon text-center">2</div>
              <div class="step-desc-text">
                <h3 class="mt-2">Crypto Pay API Request</h3>
                <div class="mt-2">Requests are only served over HTTPS<br>To pass parameters use:</div>
                <ul class="list-steps list-style-disc list-group-flush mt-2">
                  <li class="text-blue">URL query string</li>
                  <li class="text-blue">application/json</li>
                  <li class="text-blue">application/x-www-form-urlencoded</li>
                  <li class="text-blue">multipart/form-data</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row instruction-step mt-4 align-items-center">
            <div class="step-desc col col-lg">
              <div :class="{'dark-num': darkTheme}" class="num-icon text-center">3</div>
              <div class="step-desc-text">
                <h3 class="mt-2">Getting updates</h3>
                <div class="mt-2">There are two ways of receiving<br>updates for your app:</div>
                <ul class="list-steps list-style-disc list-group-flush mt-2">
                  <li class="text-blue"><a href="#" class="link">getInvoices </a>
                    <span class="text-dark">method to get a list of created invoices.</span>
                  </li>
                  <li class="text-blue"><a href="#" class="link">Webhooks </a>
                    <span class="text-dark">to receive updates in realtime.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col col-lg-6">
              <div class="row bg-step bg-blue justify-content-center align-items-center">
                <div class="invoice-block invoice-step col-5">
                  <span class="code-blue">Invoice</span>( <br>
                  <div class="row">
                    <div class="col-1 pe-0 ms-4 w-auto code-blue">
                      <div>payload:</div>
                      <div>status:</div>
                      <div>amount:</div>
                      <div>asset:</div>
                    </div>
                    <div class="col">
                      <div>“item:monthly_premium”,</div>
                      <div>“paid”,</div>
                      <div>“3.99”,</div>
                      <div>“USDT”</div>
                    </div>
                  </div>
                  )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-6">
      <div class="api-block position-relative">
        <img class="img-api-block" src="./static/images/api_block_revert.png" alt="">
        <div class="api-bg-light">
          <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="550"
               viewBox="0 0 1200 550" fill="none">
            <g style="mix-blend-mode:overlay" filter="url(#filter0_f_955_4205)">
              <path
                  d="M1821.59 -896.841C1911.57 -333.082 400.407 685.333 -591.589 973.994C-1648.28 1224.9 -3190 1625.98 -903.38 1223.04C1383.24 820.103 2292.08 459.935 2460.67 330.218L1821.59 -896.841Z"
                  fill="url(#paint0_linear_955_4205)"/>
            </g>
            <defs>
              <filter id="filter0_f_955_4205" x="-2202.37" y="-1010.84" width="4777.04" height="2519.27"
                      filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="57" result="effect1_foregroundBlur_955_4205"/>
              </filter>
              <linearGradient id="paint0_linear_955_4205" x1="619.244" y1="286.824" x2="821.605" y2="907.79"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0.63" offset="0"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="row ps-lg-5 text-block text-white">
          <div class="col">
            <h2>Crypto Pay API</h2>
            <div class="mt-3 d-none d-lg-block">Explore available methods and types <br> and integrate them in any
              programming <br>
              language.
            </div>
            <div class="mt-3 d-lg-none d-block">Explore available methods and types and integrate them in any
              programming language.
            </div>
            <a class="btn btn-secondary-trans btn-api text-white mt-3" href="#">Open API Docs</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid community-block-wrapper">
      <div class="container community-block">
        <div class="row">
          <div class="col text-center">
            <h2>Join dev community</h2>
            <div class="mt-2">Connect with bot developers and explore the possibilities<br>our crypto payments service
              unlocks.
            </div>
            <div class="libraries-list row mt-4">
              <div class="lib-item col-lg-2 col-4 text-center">
                <img src="./static/images/JS.svg" alt="">
                <div class="lib-text">crypto-pay-api</div>
              </div>
              <div class="lib-item col-lg-2 col-4 text-center">
                <img src="./static/images/NET.svg" alt="">
                <div class="lib-text">CryptoPay</div>
              </div>
              <div class="lib-item col-lg-2 col-4 text-center">
                <img src="./static/images/php.svg" alt="">
                <div class="lib-text">crypto-pay-api</div>
              </div>
              <div class="lib-item col-lg-2 col-4 text-center">
                <img src="./static/images/Python.svg" alt="">
                <div class="lib-text">aiocryptopay</div>
              </div>
              <div class="lib-item col-lg-2 col-4 text-center">
                <img src="./static/images/go.svg" alt="">
                <div class="lib-text">cryptobot-sdk-golang</div>
              </div>
            </div>
            <a href="#" class="col btn btn-general text-white mt-4">Open Devs chat</a>
          </div>
        </div>
      </div>
    </div>
    <footer class="container-fluid">
      <div class="container text-white">
        <div class="row align-items-center justify-content-between">
          <div class="col-3"><a href="/">
            <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g>
                <polygon fill="#44A3DD" points="0 0 64 0 64 64 0 64"/>
                <path
                    d="M12.5002858,23 L25.6761004,23 C26.6656866,23 27.5759827,23.5413597 28.0484682,24.4108643 L39.7799231,46 L24.081859,46 C23.0922729,46 22.1819767,45.4586403 21.7094912,44.5891357 L11.1823037,25.2161865 C10.7867648,24.4882851 11.0561979,23.5775568 11.7840993,23.1820179 C12.0039143,23.0625713 12.2501137,23 12.5002858,23 Z"
                    fill="#BEE5F7"/>
                <path
                    d="M51.5910069,23 C51.8411791,23 52.0873785,23.0625713 52.3071934,23.1820179 C53.0130373,23.5655707 53.2877777,24.4335625 52.943121,25.1495294 L52.9089891,25.2161865 L42.3818016,44.5891357 C41.9245575,45.4305918 41.0572931,45.9647321 40.1049406,45.9983172 L40.0094337,46 L24.5560452,46 L24.081859,46 L23.9861474,45.9983099 C23.4883845,45.9807184 23.0138729,45.8263853 22.6090091,45.5629027 C22.8118648,45.6793724 23.0414562,45.7544235 23.2863079,45.7765197 C23.3123502,45.7788699 23.522255,45.7983421 23.7558113,45.7356356 C23.8545852,45.7091163 24.2192366,45.6239743 24.6056229,45.2625823 C24.7211639,45.1545153 24.8827176,44.9224567 25.0902842,44.5664065 L36.0428245,24.4108643 C36.5000686,23.5694082 37.367333,23.0352679 38.3196855,23.0016828 L38.4151924,23 L51.5910069,23 Z"
                    fill="#FFFFFF"/>
              </g>
            </svg>
          </a></div>
          <div class="col col-lg-5 header-bullets-wrapper">
            <div class="header-bullets row text-center justify-content-center">
              <a class="col-1 w-auto" href="#">Use cases</a>
              <a class="col-1 w-auto" href="#">Features</a>
              <a class="col-1 w-auto" href="#">How to starts</a>
            </div>
          </div>
          <div class="col col-lg-3">
            <div class="row align-items-center justify-content-end">
              <a href="#" class="col-1 w-auto text-white btn-secondary-trans">Get started</a>
            </div>
          </div>
        </div>
        <div class="mt-2">©2023 Crypto Bot</div>
      </div>
    </footer>
  </div>
</template>

<script>
import './static/js/slider.js';
import './static/js/animation.js';

export default {
  name: "index",
  data() {
    return {
      darkTheme: false,
    };
  },
  computed: {
    imageDisplay() {
      return this.darkTheme ? "none" : "initial";
    },
    imageDisplayDark() {
      return this.darkTheme ? "initial" : "none";
    },
    modeLight() {
      return this.darkTheme ? "none" : "initial";
    },
    modeDark() {
      return this.darkTheme ? "initial" : "none";
    },
    emoji() {
      return this.darkTheme ? "none" : "initial";
    },
    emojiDark() {
      return this.darkTheme ? "initial" : "none";
    },
    phoneMsg() {
      return this.darkTheme ? "none" : "initial";
    },
    phoneMsgDark() {
      return this.darkTheme ? "initial" : "none";
    },
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    this.darkTheme = savedTheme === 'dark';
  },
  methods: {
    toggleTheme() {
      if (process.client) {
        this.darkTheme = !this.darkTheme;
        localStorage.setItem('theme', this.darkTheme ? 'dark' : 'light');
      }
    },
  }
}

</script>
