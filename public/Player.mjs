class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
  }

  movePlayer(dir, speed) {
    switch(dir){
      case 'right':
        this.x += speed;
        break;
      case 'left':
        this.x -= speed;
        break;
      case 'up':
        this.y -= speed;
        break;
      case 'down':
        this.y += speed;
        break;
    }
  }

  collision(item) {
    return (item.x >= this.x || item.x <= this.x) &&  (item.y >= this.y || item.y <= this.y);
  }

  calculateRank(arr) {
    const sortedPlayers = arr.sort((a, b) => b.score - a.score);
    const index = sortedPlayers.findIndex(p => p.id === this.id);
    const rank = index + 1;
    return `Rank: ${rank}/${arr.length}`;
  }
}

export default Player;
