import Institution from '../models/Institution';
import images_view from './images_view';
import imagesView from './images_view'

export default{
  render(institution: Institution){
    return {
      id: institution.id,
      name: institution.name,
      latitude: institution.latitude,
      longitude: institution.longitude,
      about: institution.about,
      instructions: institution.instructions,
      opening_hours: institution.opening_hours,
      open_on_weekends: institution.open_on_weekends,
      images: images_view.renderMany(institution.images)
    }
  },
  renderMany(institutions: Institution[]){
    return institutions.map(institution=>this.render(institution))
  }
}
