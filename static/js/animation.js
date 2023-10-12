if (process.client) {
    {
        if (window.innerWidth > 768) {
        document.addEventListener('DOMContentLoaded', function () {
                // blockCurrencies
                const blockCurrencies = document.getElementById('block_currencies');
                const tokens = blockCurrencies.querySelectorAll('.token');

                function resetTokens() {
                    tokens.forEach(token => {
                        token.classList.remove('active-token');
                    });
                }

                blockCurrencies.addEventListener('mouseenter', () => {
                    if (!blockCurrencies.classList.contains('animating')) {
                        blockCurrencies.classList.add('animating');
                        let index = 0;
                        const tokenInterval = setInterval(() => {
                            resetTokens();
                            tokens[index].classList.add('active-token');
                            index++;

                            if (index === tokens.length) {
                                clearInterval(tokenInterval);
                                setTimeout(() => {
                                    resetTokens();
                                    blockCurrencies.classList.remove('animating');
                                }, 300);
                            }
                        }, 300);
                    }
                });

                const blockMsg = document.getElementById('messageBlock');
                const msgBtns = blockMsg.querySelectorAll('.msg-btn-animate');
                const msgText = blockMsg.querySelector('.msg-text');
                function resetBtns() {
                    msgBtns.forEach(btn => {
                        btn.classList.remove('active-btn');
                    });
                }

                function changeMsgText(text) {
                    msgText.innerHTML = text;
                }

                blockMsg.addEventListener('mouseenter', () => {
                    if (!blockMsg.classList.contains('animating')) {
                        blockMsg.classList.add('animating');
                        let index = 0;
                        const interval = setInterval(() => {
                            resetBtns();
                            msgBtns[index].classList.add('active-btn');
                            if (msgBtns[1].classList.contains('active-btn')) {
                                changeMsgText(`Application Statistics <b>@GoodsBot</b> for <b>today:</b><br><br>
                            Volume: <b>$3,290</b><br><br>
                            The number of created invoices: <b>2,569</b> <br>
                            Number of payments: <b>1,253</b><br>
                            Number of users: <b>1,606</b><br><br>
                            Conversion: <b>48%</b>
                            <div class="msg-time-span">21:30</div>`);
                            } else if (msgBtns[2].classList.contains('active-btn')) {
                                changeMsgText(`Application Statistics <b>@GoodsBot</b> for <b>yesterday:</b><br><br>
                            Volume: <b>$8,216</b><br><br>
                            The number of created invoices: <b>4,980</b> <br>
                            Number of payments: <b>3,012</b><br>
                            Number of users: <b>3,606</b><br><br>
                            Conversion: <b>60%</b>
                            <div class="msg-time-span">21:30</div>`);
                            } else if (msgBtns[0].classList.contains('active-btn')) {
                                changeMsgText(`Application Statistics <b>@GoodsBot</b> for <b>all time:</b><br><br>
                            Volume: <b>$204,920</b><br><br>
                            The number of created invoices: <b>16,256</b> <br>
                            Number of payments: <b>9,353</b><br>
                            Number of users: <b>5,606</b><br><br>
                            Conversion: <b>57%</b>
                            <div class="msg-time-span">21:30</div>`);
                            }
                            index++;

                            if (index === msgBtns.length) {
                                clearInterval(interval);
                                setTimeout(() => {
                                    blockMsg.classList.remove('animating');
                                }, 1200);
                            }
                        }, 1200);
                    }
                });

                // animation create block
                const createBlock = document.getElementById('create_block');
                const cursorIcon = createBlock.querySelector('.cursor-icon');
                const btnCreate = document.getElementById('btn_create');

                function delay(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                let isAnimating = false;

                async function playAnimation() {
                    if (!isAnimating) {
                        isAnimating = true;

                        cursorIcon.style.transform = 'translate(-40px, -20px)';
                        await delay(300);

                        btnCreate.classList.add('btn-create-active');
                        await delay(700);

                        btnCreate.style.transform = 'scale(1.2)';
                        // Задержка
                        await delay(300);

                        btnCreate.style.transform = 'scale(1)';
                        // Задержка
                        await delay(300);

                        cursorIcon.style.transform = 'translate(0, 0)';
                        await delay(300);

                        btnCreate.classList.remove('btn-create-active');
                        isAnimating = false;
                    }
                }

                createBlock.addEventListener('mouseenter', () => {
                    playAnimation();
                });


                // phone_popup
                const popupBlock = document.getElementById('popup_block');
                const messages = popupBlock.querySelectorAll('.phone-msg');
                let currentMsg = 0;
                let messageInterval;
                let msgAnim = false;

                async function showNextMessage() {
                    const currentMessage = messages[currentMsg];
                    currentMessage.classList.remove('active');
                    currentMessage.classList.add('hidden');
                    currentMsg = (currentMsg + 1) % messages.length;
                    const nextMessage = messages[currentMsg];
                    nextMessage.classList.add('active');
                    nextMessage.classList.remove('btm');
                    nextMessage.classList.remove('hidden');

                    if (nextMessage === messages[0]) {
                        clearInterval(messageInterval);
                        setTimeout(() => {
                            resetMessages();
                            popupBlock.classList.remove('animating2');
                            msgAnim = false;
                        }, 0);
                    }
                }

                function resetMessages() {
                    messages.forEach(message => {
                        message.classList.remove('hidden');
                        message.classList.remove('active');
                    });
                    messages[0].classList.add('active');
                    messages[1].classList.add('btm');
                    messages[2].classList.add('btm');
                    currentMsg = 0;
                }

                popupBlock.addEventListener('mouseenter', () => {
                    if (!msgAnim) {
                        msgAnim = true;
                        popupBlock.classList.add('animating2');

                        messageInterval = setInterval(() => {
                            showNextMessage();
                        }, 1500);
                        showNextMessage();
                    }

                });

                // anonymous_popup
                const popupBlock2 = document.getElementById('popup_block_2');
                const messages2 = popupBlock2.querySelectorAll('.msg-content');
                let currentMsg2 = 0;
                let messageInterval2;
                let isAnimating2 = false;

                async function showNextMessage2() {
                    const currentMessage2 = messages2[currentMsg2];
                    currentMessage2.classList.remove('active');
                    currentMessage2.classList.add('hidden');
                    currentMsg2 = (currentMsg2 + 1) % messages2.length;
                    const nextMessage2 = messages2[currentMsg2];
                    nextMessage2.classList.add('active');
                    nextMessage2.classList.remove('btm');
                    nextMessage2.classList.remove('hidden');

                    if (nextMessage2 === messages2[0]) {
                        clearInterval(messageInterval2);
                        setTimeout(() => {
                            resetMessages2();
                            popupBlock2.classList.remove('animating');
                            isAnimating2 = false;
                        }, 0);
                    }
                }

                function resetMessages2() {
                    messages2.forEach(message => {
                        message.classList.remove('hidden');
                        message.classList.remove('active');
                    });
                    messages2[0].classList.add('active');
                    messages2[1].classList.add('btm');
                    messages2[2].classList.add('btm');
                    currentMsg2 = 0;
                }

                popupBlock2.addEventListener('mouseenter', () => {
                    if (!isAnimating2) {
                        isAnimating2 = true;
                        popupBlock2.classList.add('animating');
                        resetMessages2();
                        messageInterval2 = setInterval(() => {
                            showNextMessage2();
                        }, 1200);
                        showNextMessage2();
                    }

                });

                // exchange_tokens
                const exchangeBlock = document.getElementById('exchange_block');
                const exchangeTokens = exchangeBlock.querySelectorAll('.exchange-token');
                const token1 = document.getElementById('token1');
                const token2 = document.getElementById('token2');
                const token3 = document.getElementById('token3');

                let currentToken = 0;
                let isAnimating3 = false;

                function switchToken() {
                    if (isAnimating3) {
                        return;
                    }

                    isAnimating3 = true;

                    token1.classList.remove('active1');
                    token1.classList.add('active3');
                    token3.classList.add('active2');
                    token2.classList.add('active1');

                    setTimeout(() => {
                        token2.classList.remove('active1');
                        token2.classList.add('active3');
                        token1.classList.remove('active3');
                        token1.classList.add('active2');
                        token3.classList.remove('active2');
                        token3.classList.add('active1');

                        setTimeout(() => {
                            token2.classList.remove('active3');
                            token2.classList.add('active2');
                            token1.classList.remove('active2');
                            token1.classList.add('active1');
                            token3.classList.remove('active1');
                            token3.classList.add('active3');

                            isAnimating3 = false;

                            if (token1.classList.contains('active1')) {
                                resetToken();
                            }
                        }, 600);
                    }, 600);
                }

                function resetToken() {
                    exchangeTokens.forEach(token => {
                        token.classList.remove('active1', 'active2', 'active3');
                    });
                    token1.classList.add('active1');
                    currentToken = 0;
                }

                exchangeBlock.addEventListener('mouseenter', () => {
                    if (!isAnimating3) {
                        switchToken();
                    }
                });
        });
    }
    }
}

