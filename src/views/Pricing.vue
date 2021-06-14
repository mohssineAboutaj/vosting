<template>
  <v-container>
    <h2 class="display-1 text-center my-4">
      Our <span class="primary--text">plans</span> for your
      <span class="primary--text">strategies</span>.
    </h2>
    <v-subheader class="mx-auto text-center" style="max-width:700px">
      See below our three main plans for your business, for your stratup and
      agency. It starts from here, You can teach yourself what you really like.
    </v-subheader>
    <div class="my-4 text-center">
      <v-btn-toggle
        mandatory
        multiple
        v-model="billAnnualy"
        active-class="primary white--text"
      >
        <v-btn flat>bill annualy</v-btn>
        <v-btn flat>bill monthly</v-btn>
      </v-btn-toggle>
      <div class="mx-auto text-capitalize" v-if="false">
        <span class="d-inline-block">bill monthly</span>
        <v-switch class="d-inline-block mx-2" v-model="billAnnualy"></v-switch>
        <span class="d-inline-block">bill annualy</span>
      </div>
    </div>
    <v-row class="mt-10">
      <v-col v-for="(plan, p) in plans" :key="p" cols="12" md="4">
        <v-card>
          <v-card-title class="justify-center headline text-capitalize mb-5">
            {{ plan.title }}
          </v-card-title>
          <v-card-subtitle class="text-capitalize">
            {{ plan.description }}
          </v-card-subtitle>
          <v-card-text>
            <v-list class="text-capitalize">
              <v-list-item v-for="(item, i) in plan.features" :key="i">
                <v-list-item-icon class="mr-0">
                  <v-icon small color="primary">fa-check-double</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn rounded elevation="2" block color="primary">
              try it within {{ plan.price }}$/month
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Plan } from "../types"

@Component
export default class Pricing extends Vue {
  // data
  billAnnualy = false
  plans: Plan[] = []

  // hooks
  created(): void {
    this.plans.push(
      {
        title: "easy",
        description:
          "All the basics for businesses that are just getting started.",
        price: 29,
        features: ["One project", "Your dashboard"],
      },
      {
        title: "basic",
        description:
          "Better for growing businesses Advanced features for pros who that want more customers. need more customization.",
        price: 59,
        features: [
          "Two project",
          "Your dashboard",
          "Components included",
          "Advanced charts",
        ],
      },
      {
        title: "Custom",
        description:
          "Advanced features for pros who	that want more customers.	need more customization.",
        price: 139,
        features: [
          "Unlimited project",
          "Your dashboard",
          "+300 Components included",
          "Chat Support",
        ],
      },
    )
  }
}
</script>
