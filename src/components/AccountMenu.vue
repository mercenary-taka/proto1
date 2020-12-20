<template>
  <v-menu bottom open-on-hover offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-card class="mx-auto" width="200" tile>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content> ユーザー情報 </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-help-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content> ヘルプ </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content> 設定 </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content> バージョン情報 </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-exit-run</v-icon>
          </v-list-item-icon>
          <v-list-item-content> ログアウト </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>