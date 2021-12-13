<template>
  <div id="topo" :style="cssCustom">
    <div id="campo-canvas">
      <div class="btnsCanvas">
        <button class="btnLimpar" @click="limpa()">Limpar</button>
        <button class="btnSave" @click="putImage()">Save as Image</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signature",
  props: ["myback", "myBtnColor"],
  computed: {
    cssCustom() {
      return {
        "--mycolor": this.mycolor,
        "--myBtnColor": this.myBtnColor,
      };
    },
  },
  methods: {
    limpa: function () {
      var d = document.getElementById("campo-canvas");
      var d_interno = document.getElementById("quadro");
      var noRemovido = d.removeChild(d_interno);
      this.plotCanvas("quadro");
    },
    plotCanvas: function (el) {
      var quadro = document.createElement("canvas");
      let item = document.getElementById("campo-canvas");
      quadro.id = el;
      quadro.style.backgroundColor = "beige";
      quadro.style.width = (item.clientWidth + 'px');
      quadro.style.height = (item.clientHeight + 'px');
      item.appendChild(quadro);

      console.log(item.clientWidth);
      console.log(item.clientHeight);

      var largura = (item.clientWidth + 'px');
      var altura = (item.clientHeight + 'px');

      var quadro = document.getElementById(el);

      quadro.setAttribute("width", largura);
      quadro.setAttribute("height", altura);

      var ctx = quadro.getContext("2d");
      console.log("ctx", ctx);
      var left = quadro.offsetLeft;
      var top = quadro.offsetTop;

      ctx.fillStyle = "black";

      var desenhando = false;

      quadro.onmousedown = function (evt) {
        console.log("left", left, "top", top);
        console.log("evt.clientX", evt.clientX, "evt.clientY", evt.clientY);
        ctx.moveTo(evt.clientX - left, evt.clientY - top);

        desenhando = true;
      };
      quadro.onmouseup = function () {
        desenhando = false;
      };
      quadro.onmousemove = function (evt) {
        if (desenhando) {
          ctx.lineTo(evt.clientX - left, evt.clientY - top);
          ctx.stroke();
        }
      };
    },
    putImage: function () {
      var canvas = document.getElementById("quadro");

      canvas.setAttribute("download", "ass.png");
      canvas.click();

      var image = canvas.toDataURL("image/png");
      const link = document.createElement("a");

      link.href = image;
      link.download = "assinatura";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  mounted() {
    this.plotCanvas("quadro");

  },
};
</script>

<style lang="scss" scoped>
@import "@/layouts/scss/reset.scss";

#topo {
  width: 100vw;
  height: 100vh;
  background-color: var(--mycolor);

  #campo-canvas {
    background-color: #ffd68a;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    #quadro {
      width: 100%;
      height: 100%;
    }

    .btnsCanvas {
      display: flex;
      flex-direction: row;

      .btnSave {
        width: 50%;
      }

      .btnLimpar {
        width: 50%;
      }
    }
  }
}
</style>