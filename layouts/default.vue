<template>
  <div class="p-d-flex p-flex-column default-main">
    <div class="default-header p-d-flex p-flex-row p-jc-between p-ai-center">
      <div
        class="default-header-left p-d-flex p-flex-row p-jc-between p-ai-center"
      >
        <button
          class="pi pi-bars p-mr-2 p-ml-3 btn-leftbar normal-dark-btn"
          v-on:click="checkSideBarVisibility"
        ></button>

        <img
          class="p-mr-3"
          id="default-senai-logo"
          src="senai-logo.png"
          alt="Logo Senai"
        />
      </div>

      <div
        class="default-header-right p-d-flex p-flex-row p-jc-end p-ai-center"
      >
        <Profile
          v-if="actualUser !== null"
          :user="actualUser"
          text_color="white"
          back_color="#313131"
        />
      </div>

      <Sidebar
        :visible.sync="visibleLeft"
        :dismissable="false"
        :baseZIndex="1000"
        :showCloseIcon="false"
        class="default-sidebar p-sidebar-md"
      >
        <div class="p-d-flex p-flex-column p-jc-center p-ai-center">
          <p class="p-text-center default-sidebar-text">Recuar</p>
          <Button            
            icon="pi pi-arrow-circle-left"
            iconPos="right"
            class="default-sidebar-btn p-mb-2 p-button-danger p-button-text"
            @click="checkSideBarVisibility"
          />
          <p class="p-text-center default-sidebar-text">Home</p>
          <Button
            el="0"
            icon="pi pi-home"
            iconPos="right"
            class="default-sidebar-btn p-mb-2 p-button-danger p-button-text"
            @click="checkSecondSideBarVisibility"
          />
          <p class="p-text-center default-sidebar-text">Formulário</p>
          <Button
            el="1"
            icon="pi pi-book"
            iconPos="right"
            class="default-sidebar-btn p-mb-2 p-button-danger p-button-text"
            @click="checkSecondSideBarVisibility"
          />
          <p class="p-text-center default-sidebar-text" v-if="admin_user">
            Painel
          </p>
          <Button
            el="2"
            v-if="admin_user"
            icon="pi pi-chart-line"
            iconPos="right"
            class="default-sidebar-btn p-mb-2 p-button-danger p-button-text"
            @click="checkSecondSideBarVisibility"
          />
          <p class="p-text-center default-sidebar-text">Logout</p>
          <Button
            el="4"
            icon="pi pi-sign-out"
            iconPos="right"
            class="default-sidebar-btn p-mb-2 p-button-danger p-button-text"
          />
        </div>
      </Sidebar>

      <Sidebar
        v-for="(second_sidebar, index) in visibleLeftMenu" :key="index"
        :visible.sync="visibleLeftMenu[index].show"
        :dismissable="false"
        :baseZIndex="900"
        :showCloseIcon="false"
        :class="'default-second-sidebar-'+ index +' p-sidebar-md'"        
      >
      </Sidebar>
      
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "Default",
  data() {
    return {
      visibleLeft: false,
      visibleLeftMenu: [
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
      ],
      actualUser: null,
      admin_user: false,
    };
  },
  mounted() {
    this.$store.dispatch("user/getUser").then((response) => {
      this.actualUser = response[0];
      console.log("actualUser");
      console.log(this.actualUser);

      if (this.actualUser.firstname === "André") {
        this.admin_user = true;
      }
    });
  },
  methods: {
    resetLeftMenu(){
      for (let i = 0; i < this.visibleLeftMenu.length; i++) {
          this.visibleLeftMenu[i].show = false;
        }
    },
    checkSideBarVisibility() {
      this.visibleLeft = !this.visibleLeft;

      if (this.visibleLeft === false) {
        this.resetLeftMenu();
      }
    },
    checkSecondSideBarVisibility(element) {
      const btn = element.target.parentElement.getAttribute("el");
      this.resetLeftMenu();
      this.visibleLeftMenu[btn].show = !this.visibleLeftMenu[btn].show;
    },
  },
};
</script>

<style lang="scss">
@import "@/layouts/scss/reset.scss";

$sidebar_second_positions: 150px, 220px, 290px, 350px;

.default-main {
  width: 100vw;
  height: auto;
  min-height: 100vh;

  .default-header {
    height: var(--height-default-header);
    width: 100vw;
    background-color: var(--dark-background-color);

    .default-header-left {
      width: 20vw;
      min-width: 150px;
      max-width: 250px;
      height: 100%;

      .btn-leftbar {
        font-size: 25px;
        height: 100%;
        width: auto;
        padding: 10px;
      }

      #default-senai-logo {
        width: 60%;
        max-width: 150px;
        min-width: 110px;
        height: 60%;
        max-height: 38px;
        min-height: 28px;
        border-radius: 2px;
      }
    } //default-header-left

    .default-header-right {
      width: 15vw;
      min-width: 100px;
      max-width: 200px;
      height: 100%;
    } //default-header-right

    .default-sidebar {
      width: 8vw;
      min-width: 55px;
      max-width: 110px;
      height: calc(100% - var(--height-default-header));
      top: var(--height-default-header);
      color: white;
      background-color: var(--red-background-color);

      .default-sidebar-btn {
        .p-button-icon {
          color: white;
          font-size: 25px;

          &:hover {
            color: var(--dark-text-color-hover);
            transform: scale(1.15);
          }
        }
        &:focus {
          .p-button-icon {
            // color: var(--red-background-color-hover);
            color: var(--dark-background-color);
            transform: scale(1.15);
          }
        }
      }
    } //default-sidebar

    $i: 0;

    @each $position in $sidebar_second_positions {
      .default-second-sidebar-#{$i} {
        border-radius: 15px;
        width: 15vw;
        min-width: 55px;
        max-width: 210px;
        // height: calc(100% - var(--height-default-header));
        height: 150px;
        top: $position;
        // top: var(--height-default-header);
        color: white;
        background-color: var(--dark-background-color);
      } //default-sidebar

      $i: $i + 1;
    }
  } //.default-header
}

.p-component-overlay {
  background-color: rgba(0, 0, 0, 0) !important;
}

@media screen and (max-width: 1290px) {
  .default-sidebar {
    .default-sidebar-text {
      font-size: 12px;
    }
  }
}

@media screen and (max-width: 1060px) {
  .default-sidebar {
    .default-sidebar-text {
      font-size: 10px;
    }
  }
}

@media screen and (max-width: 905px) {
  .default-sidebar {
    .default-sidebar-text {
      display: none;
    }
  }
}

@media screen and (max-width: 400px) {
  #default-senai-logo {
    display: none;
  }

  .default-main {
    .default-header {
      height: var(--height-default-header-mobile);

      .default-sidebar {
        height: calc(100% - var(--height-default-header-mobile));
        top: var(--height-default-header-mobile);

        .default-sidebar-text {
          font-size: 15px;
        }
      }
    }
  }
}
</style>