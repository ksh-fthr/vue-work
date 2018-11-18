<template>
  <div>
    <h1>This page is sample page of Buefy Parts.</h1>
    <div id="app" class="container">
      <b-field label="Select a date">
        <b-datepicker
          placeholder="Click to select..."
          icon="calendar-today">
        </b-datepicker>
      </b-field>
    </div>
    <div id="app" class="container">
        <section>
            <button class="button is-primary is-medium"
                @click="isComponentModalActive = true">
                Launch component modal
            </button>

            <b-modal :active.sync="isComponentModalActive" has-modal-card>
                <modal-form v-bind="formProps"></modal-form>
            </b-modal>
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
