<template>
  <div class="circle-bg-color-anim score-circular">
    <div class="circle-bg-color-anim score-inner"></div>
    <div class="score-number"></div>
    <div class="circle-text-color-anim score-text">out of 5</div>
    <div class="score-circle">
      <div class="circle-bg-color-anim score-bar progress-right">
        <div class="circle-bg-color-anim score-progress"></div>
      </div>
      <div class="circle-bg-color-anim score-bar progress-left">
        <div class="score-progress"></div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
html {
  height: 100%;
  animation: bgcolor 1.2s ease forwards;
}
@keyframes bgcolor {
  0% {
    background: #fcd7d7;
  }
  50% {
    background: #fcefd2;
  }
  100% {
    background: #cafadf;
  }
}
.circle-text-color-anim {
  animation: circle-text-color-anim 1.2s normal forwards;
}

@keyframes circle-text-color-anim {
  0% {
    color: #ff8f6b;
  }
  20% {
    color: #ff8f6b;
  }
  30% {
    color: #ff8f6b;
  }
  40% {
    color: #ff8f6b;
  }
  50% {
    color: #ff8f6b;
  }
  60% {
    color: #ffd66b;
  }
  70% {
    color: #ffd66b;
  }
  80% {
    color: #ffd66b;
  }
  90% {
    color: #ffd66b;
  }
  100% {
    color: #ffd66b;
  }
}

.circle-bg-color-anim {
  animation: circle-bg-color-anim 1.2s normal forwards;
}

@keyframes circle-bg-color-anim {
  0% {
    background: #faeaea;
  }
  100% {
    background: #faf5ea;
  }
}
.score-circular {
  height: 100px;
  width: 100px;
  margin: 0 auto;
  border-radius: 100%;
  transform: scale(1.5);
  box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.09);
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}

.score-circular:hover {
  transform: scale(1.7);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.09), 0 10px 10px rgba(0, 0, 0, 0.09);
}
@media (hover: none) and (pointer: coarse) {
  .score-circular:hover {
    transform: scale(1.3);
    box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.08);
  }
}
.score-circular .score-inner {
  position: absolute;
  z-index: 11;
  top: 49%;
  left: 49%;
  height: 80px;
  width: 80px;
  transform: scale(1.1);
  margin: -40px 0 0 -40px;
  background-color: #eafaf1;
  border-radius: 100%;
  border: 0.5px solid rgba(251, 251, 251, 0.45);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.07);
}
.score-number::after {
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0px 1px 2px rgba(150, 150, 150, 0.14);
  font-family: sans-serif;
  z-index: 11;
  font-size: 29px;
  font-weight: 600;
  color: #ff8f6b;
  content: "4.9";
  animation: score-counter 1.2s linear forwards;
}
@keyframes score-counter {
  0% {
    content: "1.0";
    color: #ff8f6b;
  }
  20% {
    content: "1.2";
    color: #ff8f6b;
  }
  30% {
    content: "2.6";
    color: #ff8f6b;
  }
  40% {
    content: "2.8";
    color: #ff8f6b;
  }
  50% {
    content: "3.0";
    color: #ff8f6b;
  }
  60% {
    content: "3.7";
    color: #ffd66b;
  }
  70% {
    content: "4.1";
    color: #ffd66b;
  }
  80% {
    content: "4.5";
    color: #ffd66b;
  }
  90% {
    content: "4.7";
    color: #ffd66b;
  }
  100% {
    content: "4.9";
    color: #ffd66b;
  }
}
.score-circular .score-text {
  position: absolute;
  top: 66%;
  left: 50%;
  font-family: sans-serif;
  transform: translate(-50%, -50%);
  text-shadow: 0px 1px 2px rgba(150, 150, 150, 0.14);
  z-index: 11;
  font-size: 11px;
  font-weight: 500;
  color: #ff8f6b;
}
.score-circular .score-bar {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #eafaf1;
  -webkit-border-radius: 100%;
  clip: rect(0px, 100px, 100px, 50px);
  z-index: 9;
}

.score-circle .score-bar .score-progress {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  -webkit-border-radius: 100%;
  clip: rect(0px, 50px, 100px, 0px);
  z-index: -8;
  background: #28cd4100;
}

@keyframes circle-progress-color-anim-right {
  0% {
    background: #ff8f6b;
  }
  30% {
    background: #ff8f6b;
  }
  99% {
    background: #ff8f6b;
  }
  100% {
    background: #ffd66b;
  }
}
@keyframes circle-progress-color-anim-left {
  0% {
    background: #ffd66b;
  }
  100% {
    background: #ffd66b;
  }
}

.progress-right .score-progress {
  animation: progress-right 0.6s linear both,
    circle-progress-color-anim-right 0.6s normal forwards;
}
@keyframes progress-right {
  100% {
    transform: rotate(180deg);
  }
}
.progress-left {
  transform: rotate(180deg);
}
.progress-left .score-progress {
  animation: progress-left 0.6s linear both,
    circle-progress-color-anim-left 0.6s normal forwards;
  animation-delay: 0.6s;
}

@keyframes progress-left {
  100% {
    transform: rotate(140deg);
  }
}
</style>
