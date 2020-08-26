'use strict';

if (window && window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const findParentByClass = function (node, elClass) {
  if (node.classList.contains(elClass)) {
    return node;
  } else {
    return findParentByClass(node.parentNode, elClass);
  }
};

const cardOverHandler = function (evt) {
  const card = findParentByClass(evt.target, 'products__item');
  if (card.classList.contains('products__item--disabled')) {
    return;
  } else {
    if (card.classList.contains('products__item--active')) {
      card.classList.add('products__item--active-hov');
    } else {
      card.classList.add('products__item--hover');
    }
  }
};

const cardOutHandler = function (evt) {
  const card = findParentByClass(evt.target, 'products__item');
  if (card.classList.contains('products__item--disabled')) {
    return;
  } else {
    if (card.classList.contains('products__item--hover')) {
      card.classList.remove('products__item--hover');
    } else {
      if (card.classList.contains('products__item--active-hov')) {
        card.classList.remove('products__item--active-hov');
      }
    }
  }
};

const cardActivateHandler = function (evt) {
  const card = findParentByClass(evt.target, 'products__item');
  if (card.classList.contains('products__item--disabled')) {
    return;
  } else {
    if (card.classList.contains('products__item--active')) {
      card.classList.remove('products__item--active');
      card.querySelector('.products__promo-text--about').style.display = 'none';
      card.querySelector('.products__promo-text--offer').style.display = 'block';
      if (card.classList.contains('products__item--active-hov')) {
        card.classList.remove('products__item--active-hov');
      }
    } else {
      card.classList.add('products__item--active');
      card.querySelector('.products__promo-text--offer').style.display = 'none';
      card.querySelector('.products__promo-text--about').style.display = 'block';
    }
  }
};

document.querySelectorAll('.products__card').forEach(function (item) {
  item.addEventListener('click', cardActivateHandler);
  item.addEventListener('mouseover', cardOverHandler);
  item.addEventListener('mouseout', cardOutHandler);
});

document.querySelectorAll('.products__promo-buy').forEach(function (item) {
  item.addEventListener('click', cardActivateHandler);
});
