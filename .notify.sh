# TEXT="Тестирование выполнено: (☉_☉) $1%0A%0AProject:+$CI_PROJECT_NAME%0AURL:+$CI_PROJECT_URL/pipelines/$CI_PIPELINE_ID/%0ABranch:+$CI_COMMIT_REF_SLUG%0A"
# curl -s -X POST https://api.telegram.org/$TELEGRAM_BOT_TOKEN/sendMessage -d chat_id=$TELEGRAM_USER_ID -d text="$TEXT"


# #curl -F chat_id=$TELEGRAM_USER_ID -F document=@"public/report.html" https://api.telegram.org/$TELEGRAM_BOT_TOKEN/sendDocument

# TEXTU="отчет доступен по ссылке:%0AURL:+https://rdavletova.gitlab.io/$CI_PROJECT_NAME/index.html%0AURL:+https://rdavletova.gitlab.io/$CI_PROJECT_NAME/report.html"
# curl -s -X POST https://api.telegram.org/$TELEGRAM_BOT_TOKEN/sendMessage -d chat_id=$TELEGRAM_USER_ID -d text="$TEXTU"






# # curl -s -X POST https://api.telegram.org/$TELEGRAM_BOT_TOKEN/sendMessage -d chat_id=$TELEGRAM_USER_IDD -d text="$TEXT"


# # curl -F chat_id=$TELEGRAM_USER_IDD -F document=@"public/report.html" https://api.telegram.org/$TELEGRAM_BOT_TOKEN/sendDocument

# # TEXTU="отчет доступен по ссылке:%0AURL:+https://rdavletova.gitlab.io/$CI_PROJECT_NAME/"
# # curl -s -X POST https://api.telegram.org/$TELEGRAM_BOT_TOKEN/sendMessage -d chat_id=$TELEGRAM_USER_IDD -d text="$TEXTU"






