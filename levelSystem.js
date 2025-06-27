/**
 * levelSystem - Basic Level Progression Manager
 * Author: IlReDelTrucco
 * License: Custom
 */

class levelSystem {
    /**
     * Initializes the level system.
     * @param {number} maxLevel - Maximum achievable level.
     */
    constructor(maxLevel = 10) {
        if (typeof maxLevel !== 'number' || maxLevel < 1) {
            throw new Error('[levelSystem] Invalid maximum level.');
        }
        this.currentLevel = 1;
        this.maxLevel = maxLevel;
    }

    /**
     * Advances to the next level if possible.
     */
    next() {
        if (this.currentLevel < this.maxLevel) {
            this.currentLevel++;
            console.log(`[levelSystem] Advanced to level ${this.currentLevel}.`);
        } else {
            console.log('[levelSystem] Maximum level reached.');
        }
    }

    /**
     * Resets the level to 1.
     */
    reset() {
        this.currentLevel = 1;
        console.log('[levelSystem] Level reset to 1.');
    }

    /**
     * Gets the current level.
     * @returns {number}
     */
    getLevel() {
        return this.currentLevel;
    }
}

// Example usage:
// const levels = new levelSystem(5);
// levels.next();
// levels.next();
// console.log(levels.getLevel()); // Output: 3
// levels.reset();

module.exports = levelSystem;
