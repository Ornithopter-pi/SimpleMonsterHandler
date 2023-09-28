import { v4 } from "uuid"
interface IEnemy {
    name: string,
    uuid: string,
    ishidden: boolean
}[];

const enemies: IEnemy[] = [
    { name: `porkachu`, uuid: v4(), ishidden: false }, 
    { name: `Raipork`, uuid: v4(), ishidden: true }
];

function checkHidden(enemies: IEnemy[]): IEnemy[] | string {
    const shownEnemies = []
    for (const enemy of enemies) {
        if (enemy.ishidden === false) {
            shownEnemies.push(enemy)
        } return shownEnemies
    }
    return `no visible enemies`;
}
export { checkHidden, enemies };