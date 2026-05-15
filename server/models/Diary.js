const db = require('../database/connect');

class Diar {
    constructor({country_id, name, capital, population, languages, fun_fact, map_image_url}) {
        this.country_id = country_id
        this.name = name
        this.capital = capital
        this.population = population
        this.languages = languages
        this.fun_fact = fun_fact
        this.map_image_url = map_image_url
 