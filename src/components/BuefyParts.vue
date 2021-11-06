<template>
  <div>
    <h1>This page is sample page of Buefy Parts.</h1>
    <div id="app" class="container">
      <h2>Calender</h2>
      <b-field label="Select a date">
        <b-datepicker
          placeholder="Click to select..."
          icon="calendar-today" />
      </b-field>
    </div>
    <hr />
    <div id="app" class="container">
      <h2>modal</h2>
      <section>
        <button 
          class="button is-primary is-medium"
          @click="isComponentModalActive = true">
          Launch component modal
        </button>

        <b-modal 
          :active.sync="isComponentModalActive" 
          has-modal-card>
          <modal-form v-bind="formProps" />
        </b-modal>
      </section>
    </div>
    <hr />
    <div id="app" class="container">
      <h2>collapse</h2>
      <section>
        <b-collapse :open="false">
            <button 
              slot="trigger" 
              class="button is-primary">
              Click me!
            </button>
            <div class="notification">
              <div class="content">
                <h3>Subtitle</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                  Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br>
                  Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                </p>
              </div>
            </div>
        </b-collapse>
      </section>
    </div>
  </div>
</template>

<script>
const ModalForm = {
  props: ['email', 'password'],
  template: `
        <form action="">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Login</p>
                </header>
                <section class="modal-card-body">
                    <b-field label="Email">
                        <b-input
                            type="email"
                            :value="email"
                            placeholder="Your email"
                            required>
                        </b-input>
                    </b-field>

                    <b-field label="Password">
                        <b-input
                            type="password"
                            :value="password"
                            password-reveal
                            placeholder="Your password"
                            required>
                        </b-input>
                    </b-field>

                    <b-checkbox>Remember me</b-checkbox>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" type="button" @click="$parent.close()">Close</button>
                    <button class="button is-primary">Login</button>
                </footer>
            </div>
        </form>
    `
}

export default {
  components: {
    ModalForm
  },
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        email: 'evan@you.com',
        password: 'testing'
      }
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 1.5em;
  text-align: left;
}
</style>

