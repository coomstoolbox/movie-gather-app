<template>
  <v-row>
    <v-col class="text-left">
      <v-data-table
        :headers="tvpiheaders"
        :hide-default-header="true"
        :items="indexedItems"
        :loading="loading"
        loading-text="番組情報をロード中"
        no-data-text="データがありません"
        :items-per-page="100"
        :footer-props="{ 'items-per-page-options': [50, 100, 150, 200, -1] }"
        :mobile-breakpoint="0"
        :single-expand="true"
        :expanded.sync="expanded"
        item-key="id"
        show-expand
        class="elevation-1"
        @update:page="$vuetify.goTo(0)"
      >
        <template #[`item.title`]="{ item }">
          <v-card class="d-flex text-left" flat>
            <v-card class="mr-auto" flat>
              <v-card
                class="d-flex flex-nowrap d-block d-sm-inline mr-2"
                :class="{
                  amber: item.latestWork,
                  'black--text': item.latestWork,
                }"
                :dark="!item.latestWork"
                flat
              >
                <div class="d-block d-sm-inline text-left mr-2">
                  {{ item.title }}
                </div>
                <v-icon v-if="item.latestWork" dense class="mr-2"
                  >mdi-movie-open-star</v-icon
                >
                <v-icon v-if="item.subtitle" dense class="mr-2"
                  >mdi-closed-caption</v-icon
                >
                <v-icon v-if="item.dubbing" dense class="mr-2"
                  >mdi-account-voice</v-icon
                >
                <v-icon v-if="item.watched" dense class="mr-2"
                  >mdi-archive-eye</v-icon
                ></v-card
              >
              <v-card
                flat
                class="d-flex text-left text-caption flex-nowrap d-block d-sm-inline mr-2"
                >{{ item.channelName }}</v-card
              >
            </v-card>
            <v-card flat class="d-flex flex-nowrap">
              <v-icon dense class="mr-2" @click="onClickRecordingItem(item)"
                >mdi-content-save</v-icon
              >
              <v-icon dense class="mr-2" @click="onClickWatchedItem(item)"
                >mdi-database-eye</v-icon
              >
              <v-icon dense @click="onClickNoWatchItem(item)"
                >mdi-database-eye-off</v-icon
              >
            </v-card>
          </v-card>
          <div class="text-left text-caption">
            {{ item.contentDescription }}
          </div>
        </template>
        <template #expanded-item="{ headers, item }">
          <td :colspan="headers.length">{{ item.originTitle }}</td>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      apiserverurl: '',
      loading: true,
      expanded: [],
      tvpiheaders: [
        {
          text: '番組情報',
          align: 'start',
          sortable: false,
          value: 'title',
          filter: this.watchedFilter,
        },
        { text: '', value: 'data-table-expand' },
      ],
      tvpilist: [],
    }
  },
  computed: {
    indexedItems() {
      return this.tvpilist.map((item, index) => ({
        id: index,
        ...item,
      }))
    },
  },
  created() {
    if (localStorage.apiserverurl) this.apiserverurl = localStorage.apiserverurl
    this.reloadList()
  },
  methods: {
    async reloadList() {
      this.loading = true
      this.tvpilist = []
      const url = this.apiserverurl + '/v1/tvpi/list.json'
      console.log(url)
      const tvpilist = await this.$axios.$get(url)
      this.tvpilist = tvpilist
      this.loading = false
    },
    watchedFilter(value, search, item) {
      console.log(value)
      console.log(search)
      return !item.watched
    },
    // http://www.google.com/search?hl=ja&btnI=1&q=既定のブラウザ
    async onClickRecordingItem(item) {
      console.log(item.title)
      this.loading = true
      const url = this.apiserverurl + '/v1/tvp/recording'
      // const tvpilist =
      await this.$axios.$post(url, item)
      item.watched = true
      this.loading = false
    },
    async onClickWatchedItem(item) {
      console.log(item.title)
      this.loading = true
      const url = this.apiserverurl + '/v1/tvp/watched'
      // const tvpilist =
      await this.$axios.$post(url, item)
      item.watched = true
      this.loading = false
    },
    async onClickNoWatchItem(item) {
      console.log(item.title)
      this.loading = true
      const url = this.apiserverurl + '/v1/tvp/nowatch'
      // const tvpilist =
      await this.$axios.$post(url, item)
      item.watched = true
      this.loading = false
    },
  },
}
</script>
