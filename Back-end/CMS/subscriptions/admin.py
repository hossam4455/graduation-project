from django.contrib import admin

from .models import Price, Subscription


class PriceInlineAdmin(admin.TabularInline):
    model = Price
    extra = 0


class SubscriptionAdmin(admin.ModelAdmin):
    inlines = [PriceInlineAdmin]


admin.site.register(Subscription, SubscriptionAdmin)
