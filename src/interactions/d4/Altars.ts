import {
  ApplicationCommandData,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  CacheType,
  ChatInputCommandInteraction,
  InteractionResponse,
} from "discord.js";

import { Interaction } from "../../structures/Interaction";
import { CDN } from "../../utils/Constants";
import { Embed } from "../../embeds/Embed";
import { commands } from "../../i18n";

export default class Altars extends Interaction {
  public readonly enabled = true;

  public readonly category = "Diablo 4";

  public readonly command: ApplicationCommandData = {
    type: ApplicationCommandType.ChatInput,
    ...commands["altars"],
    options: [
      {
        type: ApplicationCommandOptionType.String,
        ...commands["altars.show"],
        required: true,
        choices: [
          {
            name: "Full Map",
            value: "fullmap",
          },
          {
            name: "Full Map & Pathing",
            value: "fullmap-route",
          },
          {
            name: "Scosglen",
            value: "scosglen",
          },
          {
            name: "Dry Steppes",
            value: "drysteppes",
          },
          {
            name: "Kehjistan",
            value: "kehjistan",
          },
          {
            name: "Hawezar",
            value: "hawezar",
          },
          {
            name: "Fractured Peaks",
            value: "fracturedpeaks",
          },
        ],
      },
    ],
  };

  public async run(interaction: ChatInputCommandInteraction<CacheType>): Promise<InteractionResponse<boolean>> {
    const choice = interaction.options.getString("show", true);

    const embed = new Embed().setImage(`${CDN}/map_data/altars/${choice}.png`);

    return await interaction.reply({
      embeds: [embed],
    });
  }
}
