import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DonationsService } from './donations.service';
import { Donation } from './entities/donation.entity';
import { CreateDonationInput } from './dto/create-donation.input';
import { UpdateDonationInput } from './dto/update-donation.input';

@Resolver(() => Donation)
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation(() => Donation)
  createDonation(@Args('createDonationInput') createDonationInput: CreateDonationInput) {
    return this.donationsService.create(createDonationInput);
  }

  @Query(() => [Donation], { name: 'donations' })
  findAll() {
    return this.donationsService.findAll();
  }

  @Query(() => Donation, { name: 'donation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.donationsService.findOne(id);
  }

  @Mutation(() => Donation)
  updateDonation(@Args('updateDonationInput') updateDonationInput: UpdateDonationInput) {
    return this.donationsService.update(updateDonationInput.id, updateDonationInput);
  }

  @Mutation(() => Donation)
  removeDonation(@Args('id', { type: () => Int }) id: number) {
    return this.donationsService.remove(id);
  }
}
