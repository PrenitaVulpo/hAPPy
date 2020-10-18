import Image from '../models/image';

export default{
  render(image: Image){
    return {
      id: image.id,
      url: 'http://192.168.1.10:3333/images/'+image.path
    }
  },
  renderMany(images: Image[]){
    return images.map(image=>this.render(image))
  }
}
