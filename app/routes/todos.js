import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      { text: "Create first Ember app" },
      { text: "Create second Ember app" },
      { text: "Keep learning Ember" }
    ];
  }

});
