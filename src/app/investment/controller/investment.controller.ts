import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateInvestmentDTO } from '../dto/create.investment.dto';
import { UpdateInvestmentDTO } from '../dto/update.investment.dto';
import { InvestmentEntity } from '../dto/investment.model';
import { InvestmentService } from '../services/investment.service';
import { IdParam } from 'src/app/shared/pipe/id-param.decorator';

@ApiTags('Investment')
@Controller('investment')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Post()
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiCreatedResponse({
    description: 'Investment created',
    type: InvestmentEntity,
  })
  async createInvestment(
    @Body() { initialInvestment, ownerId }: CreateInvestmentDTO,
  ): Promise<InvestmentEntity> {
    return this.investmentService.createInvestment(initialInvestment, ownerId);
  }

  @Get('/:id')
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'The id of the investment to be retrieved',
    example: '5f0e5e9e8b0d9a1c9c3f4e4a',
    required: true,
  })
  @ApiNotFoundResponse({ description: 'Investment not found' })
  @ApiOkResponse({ description: 'Investment found', type: InvestmentEntity })
  viewInvestment(@IdParam() id: string): Promise<InvestmentEntity> {
    return this.investmentService.viewInvestment(id);
  }

  @Delete('/:id')
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'The id of the investment to be deleted',
    example: '5f0e5e9e8b0d9a1c9c3f4e4a',
    required: true,
  })
  @ApiNotFoundResponse({ description: 'Investment deleted' })
  @ApiOkResponse({
    description: 'Investment deleted',
    type: InvestmentEntity,
  })
  deleteInvestment(@IdParam() id: string): Promise<InvestmentEntity> {
    return this.investmentService.deleteInvestment(id);
  }

  @Put('/:id')
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'The id of the investment to be updated',
    example: '5f0e5e9e8b0d9a1c9c3f4e4a',
    required: true,
  })
  @ApiNotFoundResponse({ description: 'Investment not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiOkResponse({ description: 'Investment updated', type: InvestmentEntity })
  updateInvestment(
    @IdParam() id: string,
    @Body() updateInvestmentDTO: UpdateInvestmentDTO,
  ): Promise<InvestmentEntity> {
    return this.investmentService.updateInvestment(
      id,
      updateInvestmentDTO.initialInvestment,
    );
  }

  @Post('/withdraw/:id')
  withdrawInvestment(
    @IdParam() id: string,
    @Body() { date },
  ): Promise<InvestmentEntity> {
    return this.investmentService.withdrawInvestment(id, date);
  }

  @Get('/by-owner/:id')
  listInvestment(): string {
    return 'Investimentos';
  }
}
