<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col cols="5"></v-col>
                <v-col cols="2">
                    <v-card rounded="xl" :color="secondary" >
                        <v-card-title>
                            <h2 class="text-center" style="color: white;">
                                入社表單
                            </h2>
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="5"></v-col>
            </v-row>
        </v-container>
        <v-container>
            <form @submit.prevent="submit">
                <v-text-field
                v-model="name.value.value"
                :counter="10"
                :error-messages="name.errorMessage.value"
                label="Name"
                ></v-text-field>

                <v-text-field
                v-model="phone.value.value"
                :counter="7"
                :error-messages="phone.errorMessage.value"
                label="Phone Number"
                ></v-text-field>

                <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="E-mail"
                ></v-text-field>

                <v-select
                v-model="select.value.value"
                :items="items"
                :error-messages="select.errorMessage.value"
                label="Select"
                ></v-select>

                <v-checkbox
                v-model="checkbox.value.value"
                :error-messages="checkbox.errorMessage.value"
                value="1"
                label="Option"
                type="checkbox"
                ></v-checkbox>

                <v-btn
                class="me-4"
                type="submit"
                >
                submit
                </v-btn>

                <v-btn @click="handleReset">
                clear
                </v-btn>
            </form>
        </v-container>
    </v-app>
</template>

<script>
  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'

  export default {
    setup () {
      const { handleSubmit, handleReset } = useForm({
        validationSchema: {
          name (value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
          },
          phone (value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
          },
          email(value) {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        if (emailRegex.test(value)) {
            return true;
        } else {
            return 'Must be a valid email address.';
        }
        },
          select (value) {
            if (value) return true

            return 'Select an item.'
          },
          checkbox (value) {
            if (value === '1') return true

            return 'Must be checked.'
          },
        },
      })
      const name = useField('name')
      const phone = useField('phone')
      const email = useField('email')
      const select = useField('select')
      const checkbox = useField('checkbox')

      const secondary = ref('secondary')

      const items = ref([
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ])

      const submit = handleSubmit(values => {
        alert(JSON.stringify(values, null, 2))
      })

      return { name, phone, email, select, checkbox, items, submit, handleReset, secondary }
    },
  }
</script>