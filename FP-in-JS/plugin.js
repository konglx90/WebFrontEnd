var items = [{
    promotion: {
        by_day: 90,
    },
    charge_models: {
        by_month: 900,
    }
}]
var i = 0;
if (items[i].promotion) {
    items[i].is_discount = true;
    if(items[i].promotion.by_day && items[i].promotion.by_day > 0){
        items[i].is_free = false;
        items[i].price = "<i>" + parseFloat(items[i].promotion.by_day)/100 + "</i><span>" + parseFloat(items[i].charge_models.by_day)/100 + "</span>";
        items[i].unit = "<b>快币/天</b>";
    }else if(items[i].promotion.by_month && items[i].promotion.by_month > 0){
        items[i].is_free = false;
        items[i].price = "<i>" + parseFloat(items[i].promotion.by_month)/100 + "</i><span>" + parseFloat(items[i].charge_models.by_month)/100 + "</span>";
        items[i].unit = "<b>快币/月</b>";
    }else if(items[i].promotion.forever && items[i].promotion.forever > 0){
        items[i].is_free = false;
        items[i].price = "<i>" + parseFloat(items[i].promotion.forever)/100 + "</i><span>" + parseFloat(items[i].charge_models.forever)/100 + "</span>";
        items[i].unit = "<b>快币/永久</b>";
    }else{
        items[i].is_discount = false;
        items[i].is_free = true;
        items[i].price = "免费";
        items[i].unit = "FREE";
    }
} else {
    items[i].is_discount = false;
    if(items[i].charge_models.by_day && items[i].charge_models.by_day > 0){
        items[i].is_free = false;
        items[i].price = parseFloat(items[i].charge_models.by_day)/100;
        items[i].unit = "快币/天";
    }else if(items[i].charge_models.daily_charge && items[i].charge_models.daily_charge > 0){
        items[i].is_free = false;
        items[i].price = parseFloat(items[i].charge_models.daily_charge)/100;
        items[i].unit = "快币/天";
    }else if(items[i].charge_models.by_month && items[i].charge_models.by_month > 0){
        items[i].is_free = false;
        items[i].price = parseFloat(items[i].charge_models.by_month)/100;
        items[i].unit = "快币/月";
    }else if(items[i].charge_models.forever && items[i].charge_models.forever > 0){
        items[i].is_free = false;
        items[i].price = parseFloat(items[i].charge_models.forever)/100;
        items[i].unit = "快币/永久";
    }else{
        items[i].is_free = true;
        items[i].price = "免费";
        items[i].unit = "FREE";
    }
}
console.log(items);

const CHARGE_TYPES_DICT = {
    by_day: '天',
    daily_charge: '天',
    by_month: '月',
    forever: '永久',
};
const CHARGE_TYPES = Object.keys(CHARGE_TYPES_DICT);

const discountType = item => item.promotion ? 'promotion' : 'charge_models';
// const isFree = (item, dType, type) => !!(item && item.dType && item.dType.type === 0);
// const setPrice = (item, dType, type) => 
// const is
CHARGE_TYPES.map(type => {
    const dType = discountType(item);
    return {
        ...item,
        // is_free: isFree(item, dType, type),
        price: setPrice(item, dType, type)
    }
})
const setPrice = (chargeTypes, item) => {
    return chargeTypes.map(type => {
        return {
            ...item,
            is_free:
        }
    })
}
